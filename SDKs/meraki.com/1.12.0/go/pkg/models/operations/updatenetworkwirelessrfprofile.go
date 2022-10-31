package operations



type UpdateNetworkWirelessRfProfilePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    RfProfileID string `pathParam:"style=simple,explode=false,name=rfProfileId"`
    
}


type UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum string

const (
    UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumDual UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum = "dual"
UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumTwo4ghz UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum = "2.4ghz"
UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumFiveghz UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum = "5ghz"
)


type UpdateNetworkWirelessRfProfileRequestBodyApBandSettings struct {
    BandOperationMode *UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum `json:"bandOperationMode,omitempty"`
    BandSteeringEnabled *bool `json:"bandSteeringEnabled,omitempty"`
    
}


type UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum string

const (
    UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnumSsid UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum = "ssid"
UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnumAp UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum = "ap"
)


type UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings struct {
    ChannelWidth *string `json:"channelWidth,omitempty"`
    MaxPower *int64 `json:"maxPower,omitempty"`
    MinBitrate *int64 `json:"minBitrate,omitempty"`
    MinPower *int64 `json:"minPower,omitempty"`
    Rxsop *int64 `json:"rxsop,omitempty"`
    ValidAutoChannels []int64 `json:"validAutoChannels,omitempty"`
    
}


type UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum string

const (
    UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnumBand UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum = "band"
UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnumSsid UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum = "ssid"
)


type UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings struct {
    AxEnabled *bool `json:"axEnabled,omitempty"`
    MaxPower *int64 `json:"maxPower,omitempty"`
    MinBitrate *float32 `json:"minBitrate,omitempty"`
    MinPower *int64 `json:"minPower,omitempty"`
    Rxsop *int64 `json:"rxsop,omitempty"`
    ValidAutoChannels []int64 `json:"validAutoChannels,omitempty"`
    
}

type UpdateNetworkWirelessRfProfileRequestBody struct {
    ApBandSettings *UpdateNetworkWirelessRfProfileRequestBodyApBandSettings `json:"apBandSettings,omitempty"`
    BandSelectionType *UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum `json:"bandSelectionType,omitempty"`
    ClientBalancingEnabled *bool `json:"clientBalancingEnabled,omitempty"`
    FiveGhzSettings *UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings `json:"fiveGhzSettings,omitempty"`
    MinBitrateType *UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum `json:"minBitrateType,omitempty"`
    Name *string `json:"name,omitempty"`
    TwoFourGhzSettings *UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings `json:"twoFourGhzSettings,omitempty"`
    
}

type UpdateNetworkWirelessRfProfileRequest struct {
    PathParams UpdateNetworkWirelessRfProfilePathParams 
    Request *UpdateNetworkWirelessRfProfileRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkWirelessRfProfileResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkWirelessRfProfile200ApplicationJSONObject map[string]interface{} 
    
}

