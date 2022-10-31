package shared



type ModifyMembershipRolesRequest struct {
    AddRoles []MembershipRole `json:"addRoles,omitempty"`
    RemoveRoles []string `json:"removeRoles,omitempty"`
    UpdateRolesParams []UpdateMembershipRolesParams `json:"updateRolesParams,omitempty"`
    
}

