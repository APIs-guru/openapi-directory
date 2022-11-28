package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Locations struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewLocations(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Locations {
	return &Locations{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// MybusinessbusinesscallsLocationsBusinesscallsinsightsList - Returns insights for Business calls for a location.
func (s *Locations) MybusinessbusinesscallsLocationsBusinesscallsinsightsList(ctx context.Context, request operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest) (*operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/businesscallsinsights", request.PathParams)

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

	res := &operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListBusinessCallsInsightsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListBusinessCallsInsightsResponse = out
		}
	}

	return res, nil
}

// MybusinessbusinesscallsLocationsGetBusinesscallssettings - Returns the Business calls settings resource for the given location.
func (s *Locations) MybusinessbusinesscallsLocationsGetBusinesscallssettings(ctx context.Context, request operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsRequest) (*operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}", request.PathParams)

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

	res := &operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BusinessCallsSettings
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BusinessCallsSettings = out
		}
	}

	return res, nil
}

// MybusinessbusinesscallsLocationsUpdateBusinesscallssettings - Updates the Business call settings for the specified location.
func (s *Locations) MybusinessbusinesscallsLocationsUpdateBusinesscallssettings(ctx context.Context, request operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsRequest) (*operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
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

	res := &operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BusinessCallsSettings
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BusinessCallsSettings = out
		}
	}

	return res, nil
}
