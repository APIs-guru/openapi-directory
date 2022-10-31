package shared

type AccountPermissionGroupsListResponse struct {
	AccountPermissionGroups []AccountPermissionGroup `json:"accountPermissionGroups,omitempty"`
	Kind                    *string                  `json:"kind,omitempty"`
}
