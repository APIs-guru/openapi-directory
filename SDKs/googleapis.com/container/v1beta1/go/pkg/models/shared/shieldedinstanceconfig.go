package shared

type ShieldedInstanceConfig struct {
	EnableIntegrityMonitoring *bool `json:"enableIntegrityMonitoring"`
	EnableSecureBoot          *bool `json:"enableSecureBoot"`
}
