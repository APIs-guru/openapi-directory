package shared



type RuntimeShieldedInstanceConfig struct {
    EnableIntegrityMonitoring *bool `json:"enableIntegrityMonitoring,omitempty"`
    EnableSecureBoot *bool `json:"enableSecureBoot,omitempty"`
    EnableVtpm *bool `json:"enableVtpm,omitempty"`
    
}

