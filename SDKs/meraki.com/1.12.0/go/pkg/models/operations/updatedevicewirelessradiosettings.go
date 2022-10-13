package operations

type UpdateDeviceWirelessRadioSettingsPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings struct {
	Channel      *int64 `json:"channel"`
	ChannelWidth *int64 `json:"channelWidth"`
	TargetPower  *int64 `json:"targetPower"`
}

type UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings struct {
	Channel     *int64 `json:"channel"`
	TargetPower *int64 `json:"targetPower"`
}

type UpdateDeviceWirelessRadioSettingsRequestBody struct {
	FiveGhzSettings    *UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings    `json:"fiveGhzSettings"`
	RfProfileID        *int64                                                          `json:"rfProfileId"`
	TwoFourGhzSettings *UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings `json:"twoFourGhzSettings"`
}

type UpdateDeviceWirelessRadioSettingsRequest struct {
	PathParams UpdateDeviceWirelessRadioSettingsPathParams
	Request    *UpdateDeviceWirelessRadioSettingsRequestBody `request:"mediaType=application/json"`
}

type UpdateDeviceWirelessRadioSettingsResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	UpdateDeviceWirelessRadioSettings200ApplicationJSONObject map[string]interface{}
}
