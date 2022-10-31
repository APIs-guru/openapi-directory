package shared



type BulkEditAssignedUserRolesRequest struct {
    CreatedAssignedUserRoles []AssignedUserRole `json:"createdAssignedUserRoles,omitempty"`
    DeletedAssignedUserRoles []string `json:"deletedAssignedUserRoles,omitempty"`
    
}

