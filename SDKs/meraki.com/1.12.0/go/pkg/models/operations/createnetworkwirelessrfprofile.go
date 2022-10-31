package operations



type CreateNetworkWirelessRfProfilePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}


type CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum string

const (
    CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumDual CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum = "dual"
CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumTwo4ghz CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum = "2.4ghz"
CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumFiveghz CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum = "5ghz"
)


type CreateNetworkWirelessRfProfileRequestBodyApBandSettings struct {
    BandOperationMode *CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum `json:"bandOperationMode,omitempty"`
    BandSteeringEnabled *bool `json:"bandSteeringEnabled,omitempty"`
    
}


type CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum string

const (
    CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnumSsid CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum = "ssid"
CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnumAp CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum = "ap"
)


type CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings struct {
    ChannelWidth *string `json:"channelWidth,omitempty"`
    MaxPower *int64 `json:"maxPower,omitempty"`
    MinBitrate *int64 `json:"minBitrate,omitempty"`
    MinPower *int64 `json:"minPower,omitempty"`
    Rxsop *int64 `json:"rxsop,omitempty"`
    ValidAutoChannels []int64 `json:"validAutoChannels,omitempty"`
    
}


type CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum string

const (
    CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnumBand CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum = "band"
CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnumSsid CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum = "ssid"
)


type CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings struct {
    AxEnabled *bool `json:"axEnabled,omitempty"`
    MaxPower *int64 `json:"maxPower,omitempty"`
    MinBitrate *float32 `json:"minBitrate,omitempty"`
    MinPower *int64 `json:"minPower,omitempty"`
    Rxsop *int64 `json:"rxsop,omitempty"`
    ValidAutoChannels []int64 `json:"validAutoChannels,omitempty"`
    
}

type CreateNetworkWirelessRfProfileRequestBody struct {
    ApBandSettings *CreateNetworkWirelessRfProfileRequestBodyApBandSettings `json:"apBandSettings,omitempty"`
    BandSelectionType CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum `json:"bandSelectionType"`
    ClientBalancingEnabled *bool `json:"clientBalancingEnabled,omitempty"`
    FiveGhzSettings *CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings `json:"fiveGhzSettings,omitempty"`
    MinBitrateType *CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum `json:"minBitrateType,omitempty"`
    Name string `json:"name"`
    TwoFourGhzSettings *CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings `json:"twoFourGhzSettings,omitempty"`
    
}

type CreateNetworkWirelessRfProfileRequest struct {
    PathParams CreateNetworkWirelessRfProfilePathParams 
    Request CreateNetworkWirelessRfProfileRequestBody `request:"mediaType=application/json"`
    
}

type CreateNetworkWirelessRfProfileResponse struct {
    ContentType string 
    StatusCode int64 
    CreateNetworkWirelessRfProfile201ApplicationJSONObject map[string]interface{} 
    
}

