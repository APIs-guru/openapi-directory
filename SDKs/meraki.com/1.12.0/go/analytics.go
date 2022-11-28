package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Analytics struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAnalytics(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Analytics {
	return &Analytics{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetDeviceCameraAnalyticsLive - Returns live state from camera of analytics zones
// Returns live state from camera of analytics zones
func (s *Analytics) GetDeviceCameraAnalyticsLive(ctx context.Context, request operations.GetDeviceCameraAnalyticsLiveRequest) (*operations.GetDeviceCameraAnalyticsLiveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/camera/analytics/live", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDeviceCameraAnalyticsLiveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDeviceCameraAnalyticsLive200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetDeviceCameraAnalyticsOverview - Returns an overview of aggregate analytics data for a timespan
// Returns an overview of aggregate analytics data for a timespan
func (s *Analytics) GetDeviceCameraAnalyticsOverview(ctx context.Context, request operations.GetDeviceCameraAnalyticsOverviewRequest) (*operations.GetDeviceCameraAnalyticsOverviewResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/camera/analytics/overview", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDeviceCameraAnalyticsOverviewResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDeviceCameraAnalyticsOverview200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetDeviceCameraAnalyticsRecent - Returns most recent record for analytics zones
// Returns most recent record for analytics zones
func (s *Analytics) GetDeviceCameraAnalyticsRecent(ctx context.Context, request operations.GetDeviceCameraAnalyticsRecentRequest) (*operations.GetDeviceCameraAnalyticsRecentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/camera/analytics/recent", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDeviceCameraAnalyticsRecentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDeviceCameraAnalyticsRecent200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetDeviceCameraAnalyticsZoneHistory - Return historical records for analytic zones
// Return historical records for analytic zones
func (s *Analytics) GetDeviceCameraAnalyticsZoneHistory(ctx context.Context, request operations.GetDeviceCameraAnalyticsZoneHistoryRequest) (*operations.GetDeviceCameraAnalyticsZoneHistoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/camera/analytics/zones/{zoneId}/history", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDeviceCameraAnalyticsZoneHistoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDeviceCameraAnalyticsZoneHistory200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetDeviceCameraAnalyticsZones - Returns all configured analytic zones for this camera
// Returns all configured analytic zones for this camera
func (s *Analytics) GetDeviceCameraAnalyticsZones(ctx context.Context, request operations.GetDeviceCameraAnalyticsZonesRequest) (*operations.GetDeviceCameraAnalyticsZonesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/camera/analytics/zones", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDeviceCameraAnalyticsZonesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDeviceCameraAnalyticsZones200ApplicationJSONObject = out
		}
	}

	return res, nil
}
