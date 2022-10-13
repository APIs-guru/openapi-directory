package operations

type UpdateOrganizationConfigTemplateSwitchProfilePortPathParams struct {
	ConfigTemplateID string `pathParam:"style=simple,explode=false,name=configTemplateId"`
	OrganizationID   string `pathParam:"style=simple,explode=false,name=organizationId"`
	PortID           string `pathParam:"style=simple,explode=false,name=portId"`
	ProfileID        string `pathParam:"style=simple,explode=false,name=profileId"`
}

type UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum string

const (
	UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnumOpen               UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum = "Open"
	UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnumCustomAccessPolicy UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum = "Custom access policy"
	UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnumMacAllowList       UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum = "MAC allow list"
	UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnumStickyMacAllowList UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum = "Sticky MAC allow list"
)

type UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum string

const (
	UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnumDisabled  UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum = "disabled"
	UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnumRootGuard UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum = "root guard"
	UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnumBpduGuard UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum = "bpdu guard"
	UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnumLoopGuard UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum = "loop guard"
)

type UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum string

const (
	UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnumTrunk  UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum = "trunk"
	UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnumAccess UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum = "access"
)

type UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum string

const (
	UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnumAlertOnly UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum = "Alert only"
	UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnumEnforce   UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum = "Enforce"
)

type UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody struct {
	AccessPolicyNumber      *int64                                                                            `json:"accessPolicyNumber"`
	AccessPolicyType        *UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum `json:"accessPolicyType"`
	AllowedVlans            *string                                                                           `json:"allowedVlans"`
	Enabled                 *bool                                                                             `json:"enabled"`
	FlexibleStackingEnabled *bool                                                                             `json:"flexibleStackingEnabled"`
	IsolationEnabled        *bool                                                                             `json:"isolationEnabled"`
	LinkNegotiation         *string                                                                           `json:"linkNegotiation"`
	MacAllowList            []string                                                                          `json:"macAllowList"`
	Name                    *string                                                                           `json:"name"`
	PoeEnabled              *bool                                                                             `json:"poeEnabled"`
	PortScheduleID          *string                                                                           `json:"portScheduleId"`
	RstpEnabled             *bool                                                                             `json:"rstpEnabled"`
	StickyMacAllowList      []string                                                                          `json:"stickyMacAllowList"`
	StickyMacAllowListLimit *int64                                                                            `json:"stickyMacAllowListLimit"`
	StormControlEnabled     *bool                                                                             `json:"stormControlEnabled"`
	StpGuard                *UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum         `json:"stpGuard"`
	Tags                    []string                                                                          `json:"tags"`
	Type                    *UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum             `json:"type"`
	Udld                    *UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum             `json:"udld"`
	Vlan                    *int64                                                                            `json:"vlan"`
	VoiceVlan               *int64                                                                            `json:"voiceVlan"`
}

type UpdateOrganizationConfigTemplateSwitchProfilePortRequest struct {
	PathParams UpdateOrganizationConfigTemplateSwitchProfilePortPathParams
	Request    *UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody `request:"mediaType=application/json"`
}

type UpdateOrganizationConfigTemplateSwitchProfilePortResponse struct {
	ContentType                                                               string
	StatusCode                                                                int64
	UpdateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject map[string]interface{}
}
