package operations

type UpdateNetworkWirelessRfProfilePathParams struct {
	NetworkID   string `pathParam:"style=simple,explode=false,name=networkId"`
	RfProfileID string `pathParam:"style=simple,explode=false,name=rfProfileId"`
}

type UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum string

const (
	UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumDual    UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum = "dual"
	UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumTwo4ghz UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum = "2.4ghz"
	UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumFiveghz UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum = "5ghz"
)

type UpdateNetworkWirelessRfProfileRequestBodyApBandSettings struct {
	BandOperationMode   *UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum `json:"bandOperationMode"`
	BandSteeringEnabled *bool                                                                         `json:"bandSteeringEnabled"`
}

type UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum string

const (
	UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnumSsid UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum = "ssid"
	UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnumAp   UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum = "ap"
)

type UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings struct {
	ChannelWidth      *string `json:"channelWidth"`
	MaxPower          *int64  `json:"maxPower"`
	MinBitrate        *int64  `json:"minBitrate"`
	MinPower          *int64  `json:"minPower"`
	Rxsop             *int64  `json:"rxsop"`
	ValidAutoChannels []int64 `json:"validAutoChannels"`
}

type UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum string

const (
	UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnumBand UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum = "band"
	UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnumSsid UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum = "ssid"
)

type UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings struct {
	AxEnabled         *bool    `json:"axEnabled"`
	MaxPower          *int64   `json:"maxPower"`
	MinBitrate        *float32 `json:"minBitrate"`
	MinPower          *int64   `json:"minPower"`
	Rxsop             *int64   `json:"rxsop"`
	ValidAutoChannels []int64  `json:"validAutoChannels"`
}

type UpdateNetworkWirelessRfProfileRequestBody struct {
	ApBandSettings         *UpdateNetworkWirelessRfProfileRequestBodyApBandSettings        `json:"apBandSettings"`
	BandSelectionType      *UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum `json:"bandSelectionType"`
	ClientBalancingEnabled *bool                                                           `json:"clientBalancingEnabled"`
	FiveGhzSettings        *UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings       `json:"fiveGhzSettings"`
	MinBitrateType         *UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum    `json:"minBitrateType"`
	Name                   *string                                                         `json:"name"`
	TwoFourGhzSettings     *UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings    `json:"twoFourGhzSettings"`
}

type UpdateNetworkWirelessRfProfileRequest struct {
	PathParams UpdateNetworkWirelessRfProfilePathParams
	Request    *UpdateNetworkWirelessRfProfileRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkWirelessRfProfileResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	UpdateNetworkWirelessRfProfile200ApplicationJSONObject map[string]interface{}
}
