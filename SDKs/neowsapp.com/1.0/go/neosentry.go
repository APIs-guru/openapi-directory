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

type Neosentry struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewNeosentry(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Neosentry {
	return &Neosentry{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// RetrieveSentryRiskData - Retrieve Sentry (Impact Risk ) Near Earth Objects
// Retrieves Near Earth Objects listed in the NASA sentry data set
func (s *Neosentry) RetrieveSentryRiskData(ctx context.Context, request operations.RetrieveSentryRiskDataRequest) (*operations.RetrieveSentryRiskDataResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/rest/v1/neo/sentry"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetrieveSentryRiskDataResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SentryObjectPagingDto
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SentryObjectPagingDto = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// RetrieveSentryRiskDataByID - Retrieve Sentry (Impact Risk ) Near Earth Objectby ID
// Retrieves Sentry Near Earth Object by ID
func (s *Neosentry) RetrieveSentryRiskDataByID(ctx context.Context, request operations.RetrieveSentryRiskDataByIDRequest) (*operations.RetrieveSentryRiskDataByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/rest/v1/neo/sentry/{asteroid_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetrieveSentryRiskDataByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SentryImpactRiskObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SentryImpactRiskObject = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}
