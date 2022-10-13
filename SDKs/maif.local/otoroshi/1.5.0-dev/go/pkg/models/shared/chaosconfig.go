package shared

type ChaosConfig struct {
	BadResponsesFaultConfig     *BadResponsesFaultConfig     `json:"badResponsesFaultConfig"`
	Enabled                     bool                         `json:"enabled"`
	LargeRequestFaultConfig     *LargeRequestFaultConfig     `json:"largeRequestFaultConfig"`
	LargeResponseFaultConfig    *LargeResponseFaultConfig    `json:"largeResponseFaultConfig"`
	LatencyInjectionFaultConfig *LatencyInjectionFaultConfig `json:"latencyInjectionFaultConfig"`
}
