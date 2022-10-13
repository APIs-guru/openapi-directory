package operations

type UpdateNetworkSmDevicesFieldsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields struct {
	Name  *string `json:"name"`
	Notes *string `json:"notes"`
}

type UpdateNetworkSmDevicesFieldsRequestBody struct {
	DeviceFields UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields `json:"deviceFields"`
	ID           *string                                             `json:"id"`
	Serial       *string                                             `json:"serial"`
	WifiMac      *string                                             `json:"wifiMac"`
}

type UpdateNetworkSmDevicesFieldsRequest struct {
	PathParams UpdateNetworkSmDevicesFieldsPathParams
	Request    UpdateNetworkSmDevicesFieldsRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSmDevicesFieldsResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	UpdateNetworkSmDevicesFields200ApplicationJSONObject map[string]interface{}
}
