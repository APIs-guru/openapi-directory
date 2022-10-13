package operations

type LockNetworkSmDevicesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type LockNetworkSmDevicesRequestBody struct {
	Ids      []string `json:"ids"`
	Pin      *int64   `json:"pin"`
	Scope    []string `json:"scope"`
	Serials  []string `json:"serials"`
	WifiMacs []string `json:"wifiMacs"`
}

type LockNetworkSmDevicesRequest struct {
	PathParams LockNetworkSmDevicesPathParams
	Request    *LockNetworkSmDevicesRequestBody `request:"mediaType=application/json"`
}

type LockNetworkSmDevicesResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	LockNetworkSmDevices200ApplicationJSONObject map[string]interface{}
}
