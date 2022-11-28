package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type SignalQualityHistory struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSignalQualityHistory(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *SignalQualityHistory {
	return &SignalQualityHistory{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetNetworkWirelessSignalQualityHistory - Return signal quality (SNR/RSSI) over time for a device or network client
// Return signal quality (SNR/RSSI) over time for a device or network client
func (s *SignalQualityHistory) GetNetworkWirelessSignalQualityHistory(ctx context.Context, request operations.GetNetworkWirelessSignalQualityHistoryRequest) (*operations.GetNetworkWirelessSignalQualityHistoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/wireless/signalQualityHistory", request.PathParams)

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

	res := &operations.GetNetworkWirelessSignalQualityHistoryResponse{
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

			res.GetNetworkWirelessSignalQualityHistory200ApplicationJSONObject = out
		}
	}

	return res, nil
}
