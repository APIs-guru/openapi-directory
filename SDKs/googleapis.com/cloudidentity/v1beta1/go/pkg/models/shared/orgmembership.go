package shared

type OrgMembershipTypeEnum string

const (
	OrgMembershipTypeEnumEntityTypeUnspecified OrgMembershipTypeEnum = "ENTITY_TYPE_UNSPECIFIED"
	OrgMembershipTypeEnumSharedDrive           OrgMembershipTypeEnum = "SHARED_DRIVE"
)

// OrgMembership
// A membership in an OrgUnit. An `OrgMembership` defines a relationship between an `OrgUnit` and an entity belonging to that `OrgUnit`, referred to as a "member".
type OrgMembership struct {
	Member    *string                `json:"member,omitempty"`
	MemberURI *string                `json:"memberUri,omitempty"`
	Name      *string                `json:"name,omitempty"`
	Type      *OrgMembershipTypeEnum `json:"type,omitempty"`
}
