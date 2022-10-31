package operations

type GetDeviceSwitchPortPathParams struct {
	PortID string `pathParam:"style=simple,explode=false,name=portId"`
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type GetDeviceSwitchPortRequest struct {
	PathParams GetDeviceSwitchPortPathParams
}

type GetDeviceSwitchPortResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetDeviceSwitchPort200ApplicationJSONObject map[string]interface{}
}
