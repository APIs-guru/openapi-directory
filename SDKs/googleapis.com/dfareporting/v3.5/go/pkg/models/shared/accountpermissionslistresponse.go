package shared

type AccountPermissionsListResponse struct {
	AccountPermissions []AccountPermission `json:"accountPermissions,omitempty"`
	Kind               *string             `json:"kind,omitempty"`
}
