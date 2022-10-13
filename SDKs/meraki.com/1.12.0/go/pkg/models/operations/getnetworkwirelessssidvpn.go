package operations

type GetNetworkWirelessSsidVpnPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

type GetNetworkWirelessSsidVpnRequest struct {
	PathParams GetNetworkWirelessSsidVpnPathParams
}

type GetNetworkWirelessSsidVpnResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	GetNetworkWirelessSsidVpn200ApplicationJSONObject map[string]interface{}
}
