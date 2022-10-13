package operations

type UpdateDeviceWirelessBluetoothSettingsPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type UpdateDeviceWirelessBluetoothSettingsRequestBody struct {
	Major *int64  `json:"major"`
	Minor *int64  `json:"minor"`
	UUID  *string `json:"uuid"`
}

type UpdateDeviceWirelessBluetoothSettingsRequest struct {
	PathParams UpdateDeviceWirelessBluetoothSettingsPathParams
	Request    *UpdateDeviceWirelessBluetoothSettingsRequestBody `request:"mediaType=application/json"`
}

type UpdateDeviceWirelessBluetoothSettingsResponse struct {
	ContentType                                                   string
	StatusCode                                                    int64
	UpdateDeviceWirelessBluetoothSettings200ApplicationJSONObject map[string]interface{}
}
