package shared

type MembershipTypeEnum string

const (
	MembershipTypeEnumTypeUnspecified MembershipTypeEnum = "TYPE_UNSPECIFIED"
	MembershipTypeEnumUser            MembershipTypeEnum = "USER"
	MembershipTypeEnumServiceAccount  MembershipTypeEnum = "SERVICE_ACCOUNT"
	MembershipTypeEnumGroup           MembershipTypeEnum = "GROUP"
	MembershipTypeEnumSharedDrive     MembershipTypeEnum = "SHARED_DRIVE"
	MembershipTypeEnumOther           MembershipTypeEnum = "OTHER"
)

// Membership
// A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member".
type Membership struct {
	CreateTime         *string             `json:"createTime,omitempty"`
	Name               *string             `json:"name,omitempty"`
	PreferredMemberKey *EntityKey          `json:"preferredMemberKey,omitempty"`
	Roles              []MembershipRole    `json:"roles,omitempty"`
	Type               *MembershipTypeEnum `json:"type,omitempty"`
	UpdateTime         *string             `json:"updateTime,omitempty"`
}

// MembershipInput
// A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member".
type MembershipInput struct {
	PreferredMemberKey *EntityKey        `json:"preferredMemberKey,omitempty"`
	Roles              []MembershipRole1 `json:"roles,omitempty"`
}
