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
	AccessPolicyNumber      *int64                                                 `json:"accessPolicyNumber,omitempty"`
	AccessPolicyType        *UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum `json:"accessPolicyType,omitempty"`
	AllowedVlans            *string                                                `json:"allowedVlans,omitempty"`
	Enabled                 *bool                                                  `json:"enabled,omitempty"`
	FlexibleStackingEnabled *bool                                                  `json:"flexibleStackingEnabled,omitempty"`
	IsolationEnabled        *bool                                                  `json:"isolationEnabled,omitempty"`
	LinkNegotiation         *string                                                `json:"linkNegotiation,omitempty"`
	MacAllowList            []string                                               `json:"macAllowList,omitempty"`
	Name                    *string                                                `json:"name,omitempty"`
	PoeEnabled              *bool                                                  `json:"poeEnabled,omitempty"`
	PortScheduleID          *string                                                `json:"portScheduleId,omitempty"`
	RstpEnabled             *bool                                                  `json:"rstpEnabled,omitempty"`
	StickyMacAllowList      []string                                               `json:"stickyMacAllowList,omitempty"`
	StickyMacAllowListLimit *int64                                                 `json:"stickyMacAllowListLimit,omitempty"`
	StormControlEnabled     *bool                                                  `json:"stormControlEnabled,omitempty"`
	StpGuard                *UpdateDeviceSwitchPortRequestBodyStpGuardEnum         `json:"stpGuard,omitempty"`
	Tags                    []string                                               `json:"tags,omitempty"`
	Type                    *UpdateDeviceSwitchPortRequestBodyTypeEnum             `json:"type,omitempty"`
	Udld                    *UpdateDeviceSwitchPortRequestBodyUdldEnum             `json:"udld,omitempty"`
	Vlan                    *int64                                                 `json:"vlan,omitempty"`
	VoiceVlan               *int64                                                 `json:"voiceVlan,omitempty"`
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
