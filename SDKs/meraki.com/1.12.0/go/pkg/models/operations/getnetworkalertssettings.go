package operations

type GetNetworkAlertsSettingsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkAlertsSettingsRequest struct {
	PathParams GetNetworkAlertsSettingsPathParams
}

type GetNetworkAlertsSettingsResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	GetNetworkAlertsSettings200ApplicationJSONObject map[string]interface{}
}
