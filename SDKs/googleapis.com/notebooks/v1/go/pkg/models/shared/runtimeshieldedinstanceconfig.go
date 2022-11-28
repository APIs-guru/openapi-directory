package shared

// RuntimeShieldedInstanceConfig
// A set of Shielded Instance options. Check [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid.
type RuntimeShieldedInstanceConfig struct {
	EnableIntegrityMonitoring *bool `json:"enableIntegrityMonitoring,omitempty"`
	EnableSecureBoot          *bool `json:"enableSecureBoot,omitempty"`
	EnableVtpm                *bool `json:"enableVtpm,omitempty"`
}
