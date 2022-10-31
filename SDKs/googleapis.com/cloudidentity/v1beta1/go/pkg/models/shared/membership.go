package shared




type MembershipTypeEnum string

const (
    MembershipTypeEnumTypeUnspecified MembershipTypeEnum = "TYPE_UNSPECIFIED"
MembershipTypeEnumUser MembershipTypeEnum = "USER"
MembershipTypeEnumServiceAccount MembershipTypeEnum = "SERVICE_ACCOUNT"
MembershipTypeEnumGroup MembershipTypeEnum = "GROUP"
MembershipTypeEnumSharedDrive MembershipTypeEnum = "SHARED_DRIVE"
MembershipTypeEnumOther MembershipTypeEnum = "OTHER"
)


type Membership struct {
    CreateTime *string `json:"createTime,omitempty"`
    MemberKey *EntityKey `json:"memberKey,omitempty"`
    Name *string `json:"name,omitempty"`
    PreferredMemberKey *EntityKey `json:"preferredMemberKey,omitempty"`
    Roles []MembershipRole `json:"roles,omitempty"`
    Type *MembershipTypeEnum `json:"type,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

