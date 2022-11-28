package shared

// ShieldedInstanceConfig
// A set of Shielded Instance options.
type ShieldedInstanceConfig struct {
	EnableIntegrityMonitoring *bool `json:"enableIntegrityMonitoring,omitempty"`
	EnableSecureBoot          *bool `json:"enableSecureBoot,omitempty"`
}
