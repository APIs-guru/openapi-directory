package shared

// IdentityServiceConfig
// IdentityServiceConfig is configuration for Identity Service which allows customers to use external identity providers with the K8S API
type IdentityServiceConfig struct {
	Enabled *bool `json:"enabled,omitempty"`
}
