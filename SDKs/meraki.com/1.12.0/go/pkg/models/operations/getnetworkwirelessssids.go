package operations

type GetNetworkWirelessSsidsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkWirelessSsidsRequest struct {
	PathParams GetNetworkWirelessSsidsPathParams
}

type GetNetworkWirelessSsidsResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetNetworkWirelessSsids200ApplicationJSONObject map[string]interface{}
}
