package operations

type GetNetworkWirelessSsidSplashSettingsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

type GetNetworkWirelessSsidSplashSettingsRequest struct {
	PathParams GetNetworkWirelessSsidSplashSettingsPathParams
}

type GetNetworkWirelessSsidSplashSettingsResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	GetNetworkWirelessSsidSplashSettings200ApplicationJSONObject map[string]interface{}
}
