package shared

// TestIamPermissionsRequest
// Request message for TestIamPermissions method.
type TestIamPermissionsRequest struct {
	Permissions []string `json:"permissions,omitempty"`
}
