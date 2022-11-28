package shared

// ChaosConfig
// Configuration for the faults that can be injected in requests
type ChaosConfig struct {
	BadResponsesFaultConfig     *BadResponsesFaultConfig     `json:"badResponsesFaultConfig,omitempty"`
	Enabled                     bool                         `json:"enabled"`
	LargeRequestFaultConfig     *LargeRequestFaultConfig     `json:"largeRequestFaultConfig,omitempty"`
	LargeResponseFaultConfig    *LargeResponseFaultConfig    `json:"largeResponseFaultConfig,omitempty"`
	LatencyInjectionFaultConfig *LatencyInjectionFaultConfig `json:"latencyInjectionFaultConfig,omitempty"`
}
