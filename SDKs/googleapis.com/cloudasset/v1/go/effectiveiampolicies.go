package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type EffectiveIamPolicies struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewEffectiveIamPolicies(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *EffectiveIamPolicies {
	return &EffectiveIamPolicies{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CloudassetEffectiveIamPoliciesBatchGet - Gets effective IAM policies for a batch of resources.
func (s *EffectiveIamPolicies) CloudassetEffectiveIamPoliciesBatchGet(ctx context.Context, request operations.CloudassetEffectiveIamPoliciesBatchGetRequest) (*operations.CloudassetEffectiveIamPoliciesBatchGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{scope}/effectiveIamPolicies:batchGet", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CloudassetEffectiveIamPoliciesBatchGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BatchGetEffectiveIamPoliciesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BatchGetEffectiveIamPoliciesResponse = out
		}
	}

	return res, nil
}
