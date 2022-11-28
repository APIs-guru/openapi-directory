package shared

// Membership
// A person's membership in a group. Only contact group memberships can be modified.
type Membership struct {
	ContactGroupMembership *ContactGroupMembership `json:"contactGroupMembership,omitempty"`
	DomainMembership       *DomainMembership       `json:"domainMembership,omitempty"`
	Metadata               *FieldMetadata          `json:"metadata,omitempty"`
}

// MembershipInput
// A person's membership in a group. Only contact group memberships can be modified.
type MembershipInput struct {
	ContactGroupMembership *ContactGroupMembershipInput `json:"contactGroupMembership,omitempty"`
	DomainMembership       *DomainMembership            `json:"domainMembership,omitempty"`
	Metadata               *FieldMetadataInput          `json:"metadata,omitempty"`
}
