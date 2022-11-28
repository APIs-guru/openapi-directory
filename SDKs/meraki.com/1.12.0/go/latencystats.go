package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type LatencyStats struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewLatencyStats(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *LatencyStats {
	return &LatencyStats{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetDeviceWirelessLatencyStats - Aggregated latency info for a given AP on this network
// Aggregated latency info for a given AP on this network
func (s *LatencyStats) GetDeviceWirelessLatencyStats(ctx context.Context, request operations.GetDeviceWirelessLatencyStatsRequest) (*operations.GetDeviceWirelessLatencyStatsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/wireless/latencyStats", request.PathParams)

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

	res := &operations.GetDeviceWirelessLatencyStatsResponse{
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

			res.GetDeviceWirelessLatencyStats200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkWirelessClientLatencyStats - Aggregated latency info for a given client on this network
// Aggregated latency info for a given client on this network. Clients are identified by their MAC.
func (s *LatencyStats) GetNetworkWirelessClientLatencyStats(ctx context.Context, request operations.GetNetworkWirelessClientLatencyStatsRequest) (*operations.GetNetworkWirelessClientLatencyStatsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/wireless/clients/{clientId}/latencyStats", request.PathParams)

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

	res := &operations.GetNetworkWirelessClientLatencyStatsResponse{
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

			res.GetNetworkWirelessClientLatencyStats200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkWirelessClientsLatencyStats - Aggregated latency info for this network, grouped by clients
// Aggregated latency info for this network, grouped by clients
func (s *LatencyStats) GetNetworkWirelessClientsLatencyStats(ctx context.Context, request operations.GetNetworkWirelessClientsLatencyStatsRequest) (*operations.GetNetworkWirelessClientsLatencyStatsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/wireless/clients/latencyStats", request.PathParams)

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

	res := &operations.GetNetworkWirelessClientsLatencyStatsResponse{
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

			res.GetNetworkWirelessClientsLatencyStats200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkWirelessDevicesLatencyStats - Aggregated latency info for this network, grouped by node
// Aggregated latency info for this network, grouped by node
func (s *LatencyStats) GetNetworkWirelessDevicesLatencyStats(ctx context.Context, request operations.GetNetworkWirelessDevicesLatencyStatsRequest) (*operations.GetNetworkWirelessDevicesLatencyStatsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/wireless/devices/latencyStats", request.PathParams)

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

	res := &operations.GetNetworkWirelessDevicesLatencyStatsResponse{
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

			res.GetNetworkWirelessDevicesLatencyStats200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkWirelessLatencyStats - Aggregated latency info for this network
// Aggregated latency info for this network
func (s *LatencyStats) GetNetworkWirelessLatencyStats(ctx context.Context, request operations.GetNetworkWirelessLatencyStatsRequest) (*operations.GetNetworkWirelessLatencyStatsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/wireless/latencyStats", request.PathParams)

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

	res := &operations.GetNetworkWirelessLatencyStatsResponse{
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

			res.GetNetworkWirelessLatencyStats200ApplicationJSONObject = out
		}
	}

	return res, nil
}
