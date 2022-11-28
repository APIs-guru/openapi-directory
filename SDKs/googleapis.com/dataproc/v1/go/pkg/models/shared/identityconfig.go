package shared

// IdentityConfig
// Identity related configuration, including service account based secure multi-tenancy user mappings.
type IdentityConfig struct {
	UserServiceAccountMapping map[string]string `json:"userServiceAccountMapping,omitempty"`
}
