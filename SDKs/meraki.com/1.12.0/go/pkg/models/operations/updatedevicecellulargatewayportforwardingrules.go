package operations

type UpdateDeviceCellularGatewayPortForwardingRulesPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules struct {
	Access     string   `json:"access"`
	AllowedIps []string `json:"allowedIps"`
	LanIP      string   `json:"lanIp"`
	LocalPort  string   `json:"localPort"`
	Name       *string  `json:"name"`
	Protocol   string   `json:"protocol"`
	PublicPort string   `json:"publicPort"`
}

type UpdateDeviceCellularGatewayPortForwardingRulesRequestBody struct {
	Rules []UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules `json:"rules"`
}

type UpdateDeviceCellularGatewayPortForwardingRulesRequest struct {
	PathParams UpdateDeviceCellularGatewayPortForwardingRulesPathParams
	Request    *UpdateDeviceCellularGatewayPortForwardingRulesRequestBody `request:"mediaType=application/json"`
}

type UpdateDeviceCellularGatewayPortForwardingRulesResponse struct {
	ContentType                                                            string
	StatusCode                                                             int64
	UpdateDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject map[string]interface{}
}
