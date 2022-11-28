package shared

// ServiceExternalIPsConfig
// Config to block services with externalIPs field.
type ServiceExternalIPsConfig struct {
	Enabled *bool `json:"enabled,omitempty"`
}
