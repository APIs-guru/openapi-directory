package shared

type ModifyMembershipRolesRequest struct {
	AddRoles          []MembershipRole              `json:"addRoles"`
	RemoveRoles       []string                      `json:"removeRoles"`
	UpdateRolesParams []UpdateMembershipRolesParams `json:"updateRolesParams"`
}
