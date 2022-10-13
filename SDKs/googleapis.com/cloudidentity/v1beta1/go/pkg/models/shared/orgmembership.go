package shared

type OrgMembershipTypeEnum string

const (
	OrgMembershipTypeEnumEntityTypeUnspecified OrgMembershipTypeEnum = "ENTITY_TYPE_UNSPECIFIED"
	OrgMembershipTypeEnumSharedDrive           OrgMembershipTypeEnum = "SHARED_DRIVE"
)

type OrgMembership struct {
	Member    *string                `json:"member"`
	MemberURI *string                `json:"memberUri"`
	Name      *string                `json:"name"`
	Type      *OrgMembershipTypeEnum `json:"type"`
}
