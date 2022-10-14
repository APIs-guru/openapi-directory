package operations

type UpdateNetworkApplianceTrafficShapingPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits struct {
	LimitDown *int64 `json:"limitDown,omitempty"`
	LimitUp   *int64 `json:"limitUp,omitempty"`
}

type UpdateNetworkApplianceTrafficShapingRequestBody struct {
	GlobalBandwidthLimits *UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits `json:"globalBandwidthLimits,omitempty"`
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
