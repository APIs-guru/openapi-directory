package operations

type GetNetworkWirelessSettingsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkWirelessSettingsRequest struct {
	PathParams GetNetworkWirelessSettingsPathParams
}

type GetNetworkWirelessSettingsResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	GetNetworkWirelessSettings200ApplicationJSONObject map[string]interface{}
}
