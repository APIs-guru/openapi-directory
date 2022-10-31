package operations

type GetNetworkWirelessSsidTrafficShapingRulesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

type GetNetworkWirelessSsidTrafficShapingRulesRequest struct {
	PathParams GetNetworkWirelessSsidTrafficShapingRulesPathParams
}

type GetNetworkWirelessSsidTrafficShapingRulesResponse struct {
	ContentType                                                       string
	StatusCode                                                        int64
	GetNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject map[string]interface{}
}
