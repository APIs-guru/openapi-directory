package shared

type AccountPermissionGroupsListResponse struct {
	AccountPermissionGroups []AccountPermissionGroup `json:"accountPermissionGroups"`
	Kind                    *string                  `json:"kind"`
}
