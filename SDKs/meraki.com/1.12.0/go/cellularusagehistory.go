package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type CellularUsageHistory struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCellularUsageHistory(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CellularUsageHistory {
	return &CellularUsageHistory{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetNetworkSmDeviceCellularUsageHistory - Return the client's daily cellular data usage history
// Return the client's daily cellular data usage history. Usage data is in kilobytes.
func (s *CellularUsageHistory) GetNetworkSmDeviceCellularUsageHistory(ctx context.Context, request operations.GetNetworkSmDeviceCellularUsageHistoryRequest) (*operations.GetNetworkSmDeviceCellularUsageHistoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/sm/devices/{deviceId}/cellularUsageHistory", request.PathParams)

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

	res := &operations.GetNetworkSmDeviceCellularUsageHistoryResponse{
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

			res.GetNetworkSmDeviceCellularUsageHistory200ApplicationJSONObject = out
		}
	}

	return res, nil
}
