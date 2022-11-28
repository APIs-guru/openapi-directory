package shared

// UpdateMembershipRolesParams
// The details of an update to a `MembershipRole`.
type UpdateMembershipRolesParams struct {
	FieldMask      *string         `json:"fieldMask,omitempty"`
	MembershipRole *MembershipRole `json:"membershipRole,omitempty"`
}
