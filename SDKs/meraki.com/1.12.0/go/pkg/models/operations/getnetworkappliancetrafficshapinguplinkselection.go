package operations

type GetNetworkApplianceTrafficShapingUplinkSelectionPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkApplianceTrafficShapingUplinkSelectionRequest struct {
	PathParams GetNetworkApplianceTrafficShapingUplinkSelectionPathParams
}

type GetNetworkApplianceTrafficShapingUplinkSelectionResponse struct {
	ContentType                                                              string
	StatusCode                                                               int64
	GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject map[string]interface{}
}
