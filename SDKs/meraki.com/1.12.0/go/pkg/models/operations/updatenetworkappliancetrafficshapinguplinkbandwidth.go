package operations

type UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular struct {
	LimitDown *int64 `json:"limitDown"`
	LimitUp   *int64 `json:"limitUp"`
}

type UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1 struct {
	LimitDown *int64 `json:"limitDown"`
	LimitUp   *int64 `json:"limitUp"`
}

type UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2 struct {
	LimitDown *int64 `json:"limitDown"`
	LimitUp   *int64 `json:"limitUp"`
}

type UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits struct {
	Cellular *UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular `json:"cellular"`
	Wan1     *UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1     `json:"wan1"`
	Wan2     *UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2     `json:"wan2"`
}

type UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody struct {
	BandwidthLimits *UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits `json:"bandwidthLimits"`
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
