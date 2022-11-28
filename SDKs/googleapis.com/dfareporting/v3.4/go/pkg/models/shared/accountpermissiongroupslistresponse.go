package shared

// AccountPermissionGroupsListResponse
// Account Permission Group List Response
type AccountPermissionGroupsListResponse struct {
	AccountPermissionGroups []AccountPermissionGroup `json:"accountPermissionGroups,omitempty"`
	Kind                    *string                  `json:"kind,omitempty"`
}
