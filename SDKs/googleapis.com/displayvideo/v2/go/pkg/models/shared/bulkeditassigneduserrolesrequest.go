package shared

type BulkEditAssignedUserRolesRequest struct {
	CreatedAssignedUserRoles []AssignedUserRole `json:"createdAssignedUserRoles"`
	DeletedAssignedUserRoles []string           `json:"deletedAssignedUserRoles"`
}
