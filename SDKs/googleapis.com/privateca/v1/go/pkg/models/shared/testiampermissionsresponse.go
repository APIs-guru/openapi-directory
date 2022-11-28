package shared

// TestIamPermissionsResponse
// Response message for `TestIamPermissions` method.
type TestIamPermissionsResponse struct {
	Permissions []string `json:"permissions,omitempty"`
}
