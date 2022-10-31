package shared



type ShieldedInstanceConfig struct {
    EnableIntegrityMonitoring *bool `json:"enableIntegrityMonitoring,omitempty"`
    EnableSecureBoot *bool `json:"enableSecureBoot,omitempty"`
    
}

