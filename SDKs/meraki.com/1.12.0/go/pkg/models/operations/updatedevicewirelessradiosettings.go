package operations



type UpdateDeviceWirelessRadioSettingsPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings struct {
    Channel *int64 `json:"channel,omitempty"`
    ChannelWidth *int64 `json:"channelWidth,omitempty"`
    TargetPower *int64 `json:"targetPower,omitempty"`
    
}

type UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings struct {
    Channel *int64 `json:"channel,omitempty"`
    TargetPower *int64 `json:"targetPower,omitempty"`
    
}

type UpdateDeviceWirelessRadioSettingsRequestBody struct {
    FiveGhzSettings *UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings `json:"fiveGhzSettings,omitempty"`
    RfProfileID *int64 `json:"rfProfileId,omitempty"`
    TwoFourGhzSettings *UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings `json:"twoFourGhzSettings,omitempty"`
    
}

type UpdateDeviceWirelessRadioSettingsRequest struct {
    PathParams UpdateDeviceWirelessRadioSettingsPathParams 
    Request *UpdateDeviceWirelessRadioSettingsRequestBody `request:"mediaType=application/json"`
    
}

type UpdateDeviceWirelessRadioSettingsResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateDeviceWirelessRadioSettings200ApplicationJSONObject map[string]interface{} 
    
}

