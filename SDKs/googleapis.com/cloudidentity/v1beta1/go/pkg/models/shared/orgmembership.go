package shared

type OrgMembershipTypeEnum string

const (
	OrgMembershipTypeEnumEntityTypeUnspecified OrgMembershipTypeEnum = "ENTITY_TYPE_UNSPECIFIED"
	OrgMembershipTypeEnumSharedDrive           OrgMembershipTypeEnum = "SHARED_DRIVE"
)

type OrgMembership struct {
	Member    *string                `json:"member,omitempty"`
	MemberURI *string                `json:"memberUri,omitempty"`
	Name      *string                `json:"name,omitempty"`
	Type      *OrgMembershipTypeEnum `json:"type,omitempty"`
}
