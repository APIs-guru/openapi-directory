package operations

type GetDeviceWirelessRadioSettingsPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type GetDeviceWirelessRadioSettingsRequest struct {
	PathParams GetDeviceWirelessRadioSettingsPathParams
}

type GetDeviceWirelessRadioSettingsResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	GetDeviceWirelessRadioSettings200ApplicationJSONObject map[string]interface{}
}
