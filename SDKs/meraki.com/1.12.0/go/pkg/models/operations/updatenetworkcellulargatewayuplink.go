package operations

type UpdateNetworkCellularGatewayUplinkPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits struct {
	LimitDown *int64 `json:"limitDown"`
	LimitUp   *int64 `json:"limitUp"`
}

type UpdateNetworkCellularGatewayUplinkRequestBody struct {
	BandwidthLimits *UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits `json:"bandwidthLimits"`
}

type UpdateNetworkCellularGatewayUplinkRequest struct {
	PathParams UpdateNetworkCellularGatewayUplinkPathParams
	Request    *UpdateNetworkCellularGatewayUplinkRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkCellularGatewayUplinkResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	UpdateNetworkCellularGatewayUplink200ApplicationJSONObject map[string]interface{}
}
