package operations

type UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular struct {
	LimitDown *int64 `json:"limitDown,omitempty"`
	LimitUp   *int64 `json:"limitUp,omitempty"`
}

type UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1 struct {
	LimitDown *int64 `json:"limitDown,omitempty"`
	LimitUp   *int64 `json:"limitUp,omitempty"`
}

type UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2 struct {
	LimitDown *int64 `json:"limitDown,omitempty"`
	LimitUp   *int64 `json:"limitUp,omitempty"`
}

type UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits struct {
	Cellular *UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular `json:"cellular,omitempty"`
	Wan1     *UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1     `json:"wan1,omitempty"`
	Wan2     *UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2     `json:"wan2,omitempty"`
}

type UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody struct {
	BandwidthLimits *UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits `json:"bandwidthLimits,omitempty"`
}

type UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest struct {
	PathParams UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams
	Request    *UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse struct {
	ContentType                                                                 string
	StatusCode                                                                  int64
	UpdateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject map[string]interface{}
}
