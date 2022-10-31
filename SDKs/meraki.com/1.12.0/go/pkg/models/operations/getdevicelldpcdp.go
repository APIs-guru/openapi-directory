package operations

type GetDeviceLldpCdpPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type GetDeviceLldpCdpRequest struct {
	PathParams GetDeviceLldpCdpPathParams
}

type GetDeviceLldpCdpResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetDeviceLldpCdp200ApplicationJSONObject map[string]interface{}
}
