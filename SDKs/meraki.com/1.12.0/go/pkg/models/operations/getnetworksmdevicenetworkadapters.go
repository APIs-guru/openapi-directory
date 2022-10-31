package operations

type GetNetworkSmDeviceNetworkAdaptersPathParams struct {
	DeviceID  string `pathParam:"style=simple,explode=false,name=deviceId"`
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSmDeviceNetworkAdaptersRequest struct {
	PathParams GetNetworkSmDeviceNetworkAdaptersPathParams
}

type GetNetworkSmDeviceNetworkAdaptersResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	GetNetworkSmDeviceNetworkAdapters200ApplicationJSONObject map[string]interface{}
}
