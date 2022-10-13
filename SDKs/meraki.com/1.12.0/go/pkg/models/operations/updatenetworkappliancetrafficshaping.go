package operations

type UpdateNetworkApplianceTrafficShapingPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits struct {
	LimitDown *int64 `json:"limitDown"`
	LimitUp   *int64 `json:"limitUp"`
}

type UpdateNetworkApplianceTrafficShapingRequestBody struct {
	GlobalBandwidthLimits *UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits `json:"globalBandwidthLimits"`
}

type UpdateNetworkApplianceTrafficShapingRequest struct {
	PathParams UpdateNetworkApplianceTrafficShapingPathParams
	Request    *UpdateNetworkApplianceTrafficShapingRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkApplianceTrafficShapingResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	UpdateNetworkApplianceTrafficShaping200ApplicationJSONObject map[string]interface{}
}
