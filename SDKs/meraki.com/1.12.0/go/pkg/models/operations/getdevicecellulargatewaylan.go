package operations

type GetDeviceCellularGatewayLanPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type GetDeviceCellularGatewayLanRequest struct {
	PathParams GetDeviceCellularGatewayLanPathParams
}

type GetDeviceCellularGatewayLanResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	GetDeviceCellularGatewayLan200ApplicationJSONObject map[string]interface{}
}
