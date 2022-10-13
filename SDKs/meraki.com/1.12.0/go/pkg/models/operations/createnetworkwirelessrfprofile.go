package operations

type CreateNetworkWirelessRfProfilePathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum string

const (
	CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumDual    CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum = "dual"
	CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumTwo4ghz CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum = "2.4ghz"
	CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumFiveghz CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum = "5ghz"
)

type CreateNetworkWirelessRfProfileRequestBodyApBandSettings struct {
	BandOperationMode   *CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum `json:"bandOperationMode"`
	BandSteeringEnabled *bool                                                                         `json:"bandSteeringEnabled"`
}

type CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum string

const (
	CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnumSsid CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum = "ssid"
	CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnumAp   CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum = "ap"
)

type CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings struct {
	ChannelWidth      *string `json:"channelWidth"`
	MaxPower          *int64  `json:"maxPower"`
	MinBitrate        *int64  `json:"minBitrate"`
	MinPower          *int64  `json:"minPower"`
	Rxsop             *int64  `json:"rxsop"`
	ValidAutoChannels []int64 `json:"validAutoChannels"`
}

type CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum string

const (
	CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnumBand CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum = "band"
	CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnumSsid CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum = "ssid"
)

type CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings struct {
	AxEnabled         *bool    `json:"axEnabled"`
	MaxPower          *int64   `json:"maxPower"`
	MinBitrate        *float32 `json:"minBitrate"`
	MinPower          *int64   `json:"minPower"`
	Rxsop             *int64   `json:"rxsop"`
	ValidAutoChannels []int64  `json:"validAutoChannels"`
}

type CreateNetworkWirelessRfProfileRequestBody struct {
	ApBandSettings         *CreateNetworkWirelessRfProfileRequestBodyApBandSettings       `json:"apBandSettings"`
	BandSelectionType      CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum `json:"bandSelectionType"`
	ClientBalancingEnabled *bool                                                          `json:"clientBalancingEnabled"`
	FiveGhzSettings        *CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings      `json:"fiveGhzSettings"`
	MinBitrateType         *CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum   `json:"minBitrateType"`
	Name                   string                                                         `json:"name"`
	TwoFourGhzSettings     *CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings   `json:"twoFourGhzSettings"`
}

type CreateNetworkWirelessRfProfileRequest struct {
	PathParams CreateNetworkWirelessRfProfilePathParams
	Request    CreateNetworkWirelessRfProfileRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkWirelessRfProfileResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	CreateNetworkWirelessRfProfile201ApplicationJSONObject map[string]interface{}
}
