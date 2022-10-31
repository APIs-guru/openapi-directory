package operations

type UpdateNetworkSwitchSettingsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum string

const (
	UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnumCombined          UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum = "combined"
	UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnumRedundant         UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum = "redundant"
	UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnumUseNetworkSetting UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum = "useNetworkSetting"
)

type UpdateNetworkSwitchSettingsRequestBodyPowerExceptions struct {
	PowerType UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum `json:"powerType"`
	Serial    string                                                             `json:"serial"`
}

type UpdateNetworkSwitchSettingsRequestBody struct {
	PowerExceptions  []UpdateNetworkSwitchSettingsRequestBodyPowerExceptions `json:"powerExceptions,omitempty"`
	UseCombinedPower *bool                                                   `json:"useCombinedPower,omitempty"`
	Vlan             *int64                                                  `json:"vlan,omitempty"`
}

type UpdateNetworkSwitchSettingsRequest struct {
	PathParams UpdateNetworkSwitchSettingsPathParams
	Request    *UpdateNetworkSwitchSettingsRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSwitchSettingsResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	UpdateNetworkSwitchSettings200ApplicationJSONObject map[string]interface{}
}
