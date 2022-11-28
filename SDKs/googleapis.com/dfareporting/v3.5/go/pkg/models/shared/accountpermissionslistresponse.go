package shared

// AccountPermissionsListResponse
// Account Permission List Response
type AccountPermissionsListResponse struct {
	AccountPermissions []AccountPermission `json:"accountPermissions,omitempty"`
	Kind               *string             `json:"kind,omitempty"`
}
