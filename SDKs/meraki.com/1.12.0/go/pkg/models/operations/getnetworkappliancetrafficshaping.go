package operations

type GetNetworkApplianceTrafficShapingPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkApplianceTrafficShapingRequest struct {
	PathParams GetNetworkApplianceTrafficShapingPathParams
}

type GetNetworkApplianceTrafficShapingResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	GetNetworkApplianceTrafficShaping200ApplicationJSONObject map[string]interface{}
}
