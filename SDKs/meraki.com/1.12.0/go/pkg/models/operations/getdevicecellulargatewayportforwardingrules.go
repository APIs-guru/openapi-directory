package operations

type GetDeviceCellularGatewayPortForwardingRulesPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type GetDeviceCellularGatewayPortForwardingRulesRequest struct {
	PathParams GetDeviceCellularGatewayPortForwardingRulesPathParams
}

type GetDeviceCellularGatewayPortForwardingRulesResponse struct {
	ContentType                                                         string
	StatusCode                                                          int64
	GetDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject map[string]interface{}
}
