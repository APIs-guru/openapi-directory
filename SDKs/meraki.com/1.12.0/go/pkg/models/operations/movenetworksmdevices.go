package operations

type MoveNetworkSmDevicesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type MoveNetworkSmDevicesRequestBody struct {
	Ids        []string `json:"ids"`
	NewNetwork string   `json:"newNetwork"`
	Scope      []string `json:"scope"`
	Serials    []string `json:"serials"`
	WifiMacs   []string `json:"wifiMacs"`
}

type MoveNetworkSmDevicesRequest struct {
	PathParams MoveNetworkSmDevicesPathParams
	Request    MoveNetworkSmDevicesRequestBody `request:"mediaType=application/json"`
}

type MoveNetworkSmDevicesResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	MoveNetworkSmDevices200ApplicationJSONObject map[string]interface{}
}
