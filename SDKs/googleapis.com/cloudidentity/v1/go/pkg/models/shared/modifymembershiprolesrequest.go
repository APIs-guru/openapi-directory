package shared

// ModifyMembershipRolesRequest
// The request message for MembershipsService.ModifyMembershipRoles.
type ModifyMembershipRolesRequest struct {
	AddRoles          []MembershipRole1             `json:"addRoles,omitempty"`
	RemoveRoles       []string                      `json:"removeRoles,omitempty"`
	UpdateRolesParams []UpdateMembershipRolesParams `json:"updateRolesParams,omitempty"`
}
