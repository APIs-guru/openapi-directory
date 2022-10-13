package operations

type WipeNetworkSmDevicesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type WipeNetworkSmDevicesRequestBody struct {
	ID      *string `json:"id"`
	Pin     *int64  `json:"pin"`
	Serial  *string `json:"serial"`
	WifiMac *string `json:"wifiMac"`
}

type WipeNetworkSmDevicesRequest struct {
	PathParams WipeNetworkSmDevicesPathParams
	Request    *WipeNetworkSmDevicesRequestBody `request:"mediaType=application/json"`
}

type WipeNetworkSmDevicesResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	WipeNetworkSmDevices200ApplicationJSONObject map[string]interface{}
}
