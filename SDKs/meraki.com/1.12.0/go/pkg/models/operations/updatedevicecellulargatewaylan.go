package operations

type UpdateDeviceCellularGatewayLanPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments struct {
	IP   string  `json:"ip"`
	Mac  string  `json:"mac"`
	Name *string `json:"name"`
}

type UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges struct {
	Comment string `json:"comment"`
	End     string `json:"end"`
	Start   string `json:"start"`
}

type UpdateDeviceCellularGatewayLanRequestBody struct {
	FixedIPAssignments []UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments `json:"fixedIpAssignments"`
	ReservedIPRanges   []UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges   `json:"reservedIpRanges"`
}

type UpdateDeviceCellularGatewayLanRequest struct {
	PathParams UpdateDeviceCellularGatewayLanPathParams
	Request    *UpdateDeviceCellularGatewayLanRequestBody `request:"mediaType=application/json"`
}

type UpdateDeviceCellularGatewayLanResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	UpdateDeviceCellularGatewayLan200ApplicationJSONObject map[string]interface{}
}
