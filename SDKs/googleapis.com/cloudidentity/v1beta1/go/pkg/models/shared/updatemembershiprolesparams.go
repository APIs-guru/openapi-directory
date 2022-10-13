package shared

type UpdateMembershipRolesParams struct {
	FieldMask      *string         `json:"fieldMask"`
	MembershipRole *MembershipRole `json:"membershipRole"`
}
