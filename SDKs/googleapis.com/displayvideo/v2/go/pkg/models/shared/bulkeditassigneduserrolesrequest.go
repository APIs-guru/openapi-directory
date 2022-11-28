package shared

// BulkEditAssignedUserRolesRequestInput
// Request message for BulkEditAssignedUserRoles.
type BulkEditAssignedUserRolesRequestInput struct {
	CreatedAssignedUserRoles []AssignedUserRoleInput `json:"createdAssignedUserRoles,omitempty"`
	DeletedAssignedUserRoles []string                `json:"deletedAssignedUserRoles,omitempty"`
}
