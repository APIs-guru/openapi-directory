package operations

type GetNetworkWirelessSsidPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

type GetNetworkWirelessSsidRequest struct {
	PathParams GetNetworkWirelessSsidPathParams
}

type GetNetworkWirelessSsidResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetNetworkWirelessSsid200ApplicationJSONObject map[string]interface{}
}
