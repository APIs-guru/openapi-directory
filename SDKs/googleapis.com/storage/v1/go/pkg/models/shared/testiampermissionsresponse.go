package shared

type TestIamPermissionsResponse struct {
	Kind        *string  `json:"kind"`
	Permissions []string `json:"permissions"`
}
