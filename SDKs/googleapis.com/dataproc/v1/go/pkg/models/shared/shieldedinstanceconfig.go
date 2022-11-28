package shared

// ShieldedInstanceConfig
// Shielded Instance Config for clusters using Compute Engine Shielded VMs (https://cloud.google.com/security/shielded-cloud/shielded-vm).
type ShieldedInstanceConfig struct {
	EnableIntegrityMonitoring *bool `json:"enableIntegrityMonitoring,omitempty"`
	EnableSecureBoot          *bool `json:"enableSecureBoot,omitempty"`
	EnableVtpm                *bool `json:"enableVtpm,omitempty"`
}
