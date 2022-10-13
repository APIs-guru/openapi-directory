package operations

type GetNetworkWirelessSsidBonjourForwardingPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

type GetNetworkWirelessSsidBonjourForwardingRequest struct {
	PathParams GetNetworkWirelessSsidBonjourForwardingPathParams
}

type GetNetworkWirelessSsidBonjourForwardingResponse struct {
	ContentType                                                     string
	StatusCode                                                      int64
	GetNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject map[string]interface{}
}
