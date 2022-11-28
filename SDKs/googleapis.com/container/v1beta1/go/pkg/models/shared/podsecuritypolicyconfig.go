package shared

// PodSecurityPolicyConfig
// Configuration for the PodSecurityPolicy feature.
type PodSecurityPolicyConfig struct {
	Enabled *bool `json:"enabled,omitempty"`
}
