package shared




type MembershipStateCodeEnum string

const (
    MembershipStateCodeEnumCodeUnspecified MembershipStateCodeEnum = "CODE_UNSPECIFIED"
MembershipStateCodeEnumCreating MembershipStateCodeEnum = "CREATING"
MembershipStateCodeEnumReady MembershipStateCodeEnum = "READY"
MembershipStateCodeEnumDeleting MembershipStateCodeEnum = "DELETING"
MembershipStateCodeEnumUpdating MembershipStateCodeEnum = "UPDATING"
MembershipStateCodeEnumServiceUpdating MembershipStateCodeEnum = "SERVICE_UPDATING"
)


type MembershipState struct {
    Code *MembershipStateCodeEnum `json:"code,omitempty"`
    Description *string `json:"description,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

