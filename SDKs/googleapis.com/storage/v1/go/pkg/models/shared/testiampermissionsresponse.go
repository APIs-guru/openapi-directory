package shared

// TestIamPermissionsResponse
// A storage.(buckets|objects).testIamPermissions response.
type TestIamPermissionsResponse struct {
	Kind        *string  `json:"kind,omitempty"`
	Permissions []string `json:"permissions,omitempty"`
}
