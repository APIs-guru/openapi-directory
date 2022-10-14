package operations

type UpdateDeviceSwitchWarmSparePathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type UpdateDeviceSwitchWarmSpareRequestBody struct {
	Enabled     bool    `json:"enabled"`
	SpareSerial *string `json:"spareSerial,omitempty"`
}

type UpdateDeviceSwitchWarmSpareRequest struct {
	PathParams UpdateDeviceSwitchWarmSparePathParams
	Request    UpdateDeviceSwitchWarmSpareRequestBody `request:"mediaType=application/json"`
}

type UpdateDeviceSwitchWarmSpareResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	UpdateDeviceSwitchWarmSpare200ApplicationJSONObject map[string]interface{}
}
