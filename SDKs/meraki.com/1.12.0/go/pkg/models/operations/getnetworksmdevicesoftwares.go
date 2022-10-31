package operations

type GetNetworkSmDeviceSoftwaresPathParams struct {
	DeviceID  string `pathParam:"style=simple,explode=false,name=deviceId"`
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSmDeviceSoftwaresRequest struct {
	PathParams GetNetworkSmDeviceSoftwaresPathParams
}

type GetNetworkSmDeviceSoftwaresResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	GetNetworkSmDeviceSoftwares200ApplicationJSONObject map[string]interface{}
}
