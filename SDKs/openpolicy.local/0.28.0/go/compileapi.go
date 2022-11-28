package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type CompileAPI struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCompileAPI(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CompileAPI {
	return &CompileAPI{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PostCompile - Compile
// This API endpoint allows you to partially evaluate Rego queries and obtain a simplified version of the policy. The example below assumes that OPA has been given the following policy (use `PUT /v1/policies/{path}`):
//
// ```yaml
// package example
//
//	allow {
//	  input.subject.clearance_level >= data.reports[_].clearance_level
//	}
//
// ```
// Compile API **request body** so that it contain the following fields:
//
// | Field | Type | Required | Description |
// | --- | --- | --- | --- |
// | `query` | `string` | Yes | The query to partially evaluate and compile. |
// | `input` | `any` | No | The input document to use during partial evaluation (default: undefined). |
// | `unknowns` | `array[string]` | No | The terms to treat as unknown during partial evaluation (default: `["input"]`]). |
//
// For example:
//
// ```json
//
//	{
//	  "query": "data.example.allow == true",
//	  "input": {
//	    "subject": {
//	      "clearance_level": 4
//	    }
//	  },
//	  "unknowns": [
//	    "data.reports"
//	    ]
//	}
//
// ```
// ### Partial evaluation
// In some cases, the result of partial valuation is a conclusive, unconditional answer. See [the guidance](https://www.openpolicyagent.org/docs/latest/rest-api/#unconditional-results-from-partial-evaluation) for details.
// https://blog.openpolicyagent.org/partial-evaluation-162750eaf422 - Partial evaluation article
func (s *CompileAPI) PostCompile(ctx context.Context, request operations.PostCompileRequest) (*operations.PostCompileResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/compile"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostCompileResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostCompile200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostCompile200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FourHundred
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundred = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FourHundred
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundred = out
		}
	}

	return res, nil
}
