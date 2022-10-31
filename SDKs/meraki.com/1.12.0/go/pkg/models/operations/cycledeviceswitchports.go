package operations

type CycleDeviceSwitchPortsPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type CycleDeviceSwitchPortsRequestBody struct {
	Ports []string `json:"ports"`
}

type CycleDeviceSwitchPortsRequest struct {
	PathParams CycleDeviceSwitchPortsPathParams
	Request    CycleDeviceSwitchPortsRequestBody `request:"mediaType=application/json"`
}

type CycleDeviceSwitchPortsResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	CycleDeviceSwitchPorts200ApplicationJSONObject map[string]interface{}
}
