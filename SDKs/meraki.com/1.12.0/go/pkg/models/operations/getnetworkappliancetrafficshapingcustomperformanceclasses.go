package operations

type GetNetworkApplianceTrafficShapingCustomPerformanceClassesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest struct {
	PathParams GetNetworkApplianceTrafficShapingCustomPerformanceClassesPathParams
}

type GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse struct {
	ContentType                                                                       string
	StatusCode                                                                        int64
	GetNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJSONObject map[string]interface{}
}
