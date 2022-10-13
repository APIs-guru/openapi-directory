package shared

type AccountPermissionsListResponse struct {
	AccountPermissions []AccountPermission `json:"accountPermissions"`
	Kind               *string             `json:"kind"`
}
