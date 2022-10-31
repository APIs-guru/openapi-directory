package shared

type TestIamPermissionsResponse struct {
	Kind        *string  `json:"kind,omitempty"`
	Permissions []string `json:"permissions,omitempty"`
}
