package shared

type RuntimeShieldedInstanceConfig struct {
	EnableIntegrityMonitoring *bool `json:"enableIntegrityMonitoring"`
	EnableSecureBoot          *bool `json:"enableSecureBoot"`
	EnableVtpm                *bool `json:"enableVtpm"`
}
