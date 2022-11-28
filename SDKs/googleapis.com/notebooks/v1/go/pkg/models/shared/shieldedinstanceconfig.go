package shared

// ShieldedInstanceConfig
// A set of Shielded Instance options. Check [Images using supported Shielded VM features] Not all combinations are valid.
type ShieldedInstanceConfig struct {
	EnableIntegrityMonitoring *bool `json:"enableIntegrityMonitoring,omitempty"`
	EnableSecureBoot          *bool `json:"enableSecureBoot,omitempty"`
	EnableVtpm                *bool `json:"enableVtpm,omitempty"`
}
