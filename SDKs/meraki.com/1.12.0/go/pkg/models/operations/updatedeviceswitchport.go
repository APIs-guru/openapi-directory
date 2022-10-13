package operations

type UpdateDeviceSwitchPortPathParams struct {
	PortID string `pathParam:"style=simple,explode=false,name=portId"`
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum string

const (
	UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnumOpen               UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum = "Open"
	UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnumCustomAccessPolicy UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum = "Custom access policy"
	UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnumMacAllowList       UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum = "MAC allow list"
	UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnumStickyMacAllowList UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum = "Sticky MAC allow list"
)

type UpdateDeviceSwitchPortRequestBodyStpGuardEnum string

const (
	UpdateDeviceSwitchPortRequestBodyStpGuardEnumDisabled  UpdateDeviceSwitchPortRequestBodyStpGuardEnum = "disabled"
	UpdateDeviceSwitchPortRequestBodyStpGuardEnumRootGuard UpdateDeviceSwitchPortRequestBodyStpGuardEnum = "root guard"
	UpdateDeviceSwitchPortRequestBodyStpGuardEnumBpduGuard UpdateDeviceSwitchPortRequestBodyStpGuardEnum = "bpdu guard"
	UpdateDeviceSwitchPortRequestBodyStpGuardEnumLoopGuard UpdateDeviceSwitchPortRequestBodyStpGuardEnum = "loop guard"
)

type UpdateDeviceSwitchPortRequestBodyTypeEnum string

const (
	UpdateDeviceSwitchPortRequestBodyTypeEnumTrunk  UpdateDeviceSwitchPortRequestBodyTypeEnum = "trunk"
	UpdateDeviceSwitchPortRequestBodyTypeEnumAccess UpdateDeviceSwitchPortRequestBodyTypeEnum = "access"
)

type UpdateDeviceSwitchPortRequestBodyUdldEnum string

const (
	UpdateDeviceSwitchPortRequestBodyUdldEnumAlertOnly UpdateDeviceSwitchPortRequestBodyUdldEnum = "Alert only"
	UpdateDeviceSwitchPortRequestBodyUdldEnumEnforce   UpdateDeviceSwitchPortRequestBodyUdldEnum = "Enforce"
)

type UpdateDeviceSwitchPortRequestBody struct {
	AccessPolicyNumber      *int64                                                 `json:"accessPolicyNumber"`
	AccessPolicyType        *UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum `json:"accessPolicyType"`
	AllowedVlans            *string                                                `json:"allowedVlans"`
	Enabled                 *bool                                                  `json:"enabled"`
	FlexibleStackingEnabled *bool                                                  `json:"flexibleStackingEnabled"`
	IsolationEnabled        *bool                                                  `json:"isolationEnabled"`
	LinkNegotiation         *string                                                `json:"linkNegotiation"`
	MacAllowList            []string                                               `json:"macAllowList"`
	Name                    *string                                                `json:"name"`
	PoeEnabled              *bool                                                  `json:"poeEnabled"`
	PortScheduleID          *string                                                `json:"portScheduleId"`
	RstpEnabled             *bool                                                  `json:"rstpEnabled"`
	StickyMacAllowList      []string                                               `json:"stickyMacAllowList"`
	StickyMacAllowListLimit *int64                                                 `json:"stickyMacAllowListLimit"`
	StormControlEnabled     *bool                                                  `json:"stormControlEnabled"`
	StpGuard                *UpdateDeviceSwitchPortRequestBodyStpGuardEnum         `json:"stpGuard"`
	Tags                    []string                                               `json:"tags"`
	Type                    *UpdateDeviceSwitchPortRequestBodyTypeEnum             `json:"type"`
	Udld                    *UpdateDeviceSwitchPortRequestBodyUdldEnum             `json:"udld"`
	Vlan                    *int64                                                 `json:"vlan"`
	VoiceVlan               *int64                                                 `json:"voiceVlan"`
}

type UpdateDeviceSwitchPortRequest struct {
	PathParams UpdateDeviceSwitchPortPathParams
	Request    *UpdateDeviceSwitchPortRequestBody `request:"mediaType=application/json"`
}

type UpdateDeviceSwitchPortResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	UpdateDeviceSwitchPort200ApplicationJSONObject map[string]interface{}
}
