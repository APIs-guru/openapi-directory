package operations

type UpdateNetworkSmDevicesFieldsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

// UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields
// The new fields of the device. Each field of this object is optional.
type UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields struct {
	Name  *string `json:"name,omitempty"`
	Notes *string `json:"notes,omitempty"`
}

type UpdateNetworkSmDevicesFieldsRequestBody struct {
	DeviceFields UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields `json:"deviceFields"`
	ID           *string                                             `json:"id,omitempty"`
	Serial       *string                                             `json:"serial,omitempty"`
	WifiMac      *string                                             `json:"wifiMac,omitempty"`
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
