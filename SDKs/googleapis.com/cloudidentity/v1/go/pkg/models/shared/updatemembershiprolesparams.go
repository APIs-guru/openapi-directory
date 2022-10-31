package shared



type UpdateMembershipRolesParams struct {
    FieldMask *string `json:"fieldMask,omitempty"`
    MembershipRole *MembershipRole `json:"membershipRole,omitempty"`
    
}

