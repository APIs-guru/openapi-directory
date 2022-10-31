package operations



type UpdateOrganizationConfigTemplateSwitchProfilePortPathParams struct {
    ConfigTemplateID string `pathParam:"style=simple,explode=false,name=configTemplateId"`
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    PortID string `pathParam:"style=simple,explode=false,name=portId"`
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum string

const (
    UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnumOpen UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum = "Open"
UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnumCustomAccessPolicy UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum = "Custom access policy"
UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnumMacAllowList UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum = "MAC allow list"
UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnumStickyMacAllowList UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum = "Sticky MAC allow list"
)



type UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum string

const (
    UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnumDisabled UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum = "disabled"
UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnumRootGuard UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum = "root guard"
UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnumBpduGuard UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum = "bpdu guard"
UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnumLoopGuard UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum = "loop guard"
)



type UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum string

const (
    UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnumTrunk UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum = "trunk"
UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnumAccess UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum = "access"
)



type UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum string

const (
    UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnumAlertOnly UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum = "Alert only"
UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnumEnforce UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum = "Enforce"
)


type UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody struct {
    AccessPolicyNumber *int64 `json:"accessPolicyNumber,omitempty"`
    AccessPolicyType *UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum `json:"accessPolicyType,omitempty"`
    AllowedVlans *string `json:"allowedVlans,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    FlexibleStackingEnabled *bool `json:"flexibleStackingEnabled,omitempty"`
    IsolationEnabled *bool `json:"isolationEnabled,omitempty"`
    LinkNegotiation *string `json:"linkNegotiation,omitempty"`
    MacAllowList []string `json:"macAllowList,omitempty"`
    Name *string `json:"name,omitempty"`
    PoeEnabled *bool `json:"poeEnabled,omitempty"`
    PortScheduleID *string `json:"portScheduleId,omitempty"`
    RstpEnabled *bool `json:"rstpEnabled,omitempty"`
    StickyMacAllowList []string `json:"stickyMacAllowList,omitempty"`
    StickyMacAllowListLimit *int64 `json:"stickyMacAllowListLimit,omitempty"`
    StormControlEnabled *bool `json:"stormControlEnabled,omitempty"`
    StpGuard *UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum `json:"stpGuard,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Type *UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum `json:"type,omitempty"`
    Udld *UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum `json:"udld,omitempty"`
    Vlan *int64 `json:"vlan,omitempty"`
    VoiceVlan *int64 `json:"voiceVlan,omitempty"`
    
}

type UpdateOrganizationConfigTemplateSwitchProfilePortRequest struct {
    PathParams UpdateOrganizationConfigTemplateSwitchProfilePortPathParams 
    Request *UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody `request:"mediaType=application/json"`
    
}

type UpdateOrganizationConfigTemplateSwitchProfilePortResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject map[string]interface{} 
    
}

