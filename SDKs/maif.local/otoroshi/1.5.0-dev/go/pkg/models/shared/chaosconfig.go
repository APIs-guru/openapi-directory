package shared



type ChaosConfig struct {
    BadResponsesFaultConfig *BadResponsesFaultConfig `json:"badResponsesFaultConfig,omitempty"`
    Enabled bool `json:"enabled"`
    LargeRequestFaultConfig *LargeRequestFaultConfig `json:"largeRequestFaultConfig,omitempty"`
    LargeResponseFaultConfig *LargeResponseFaultConfig `json:"largeResponseFaultConfig,omitempty"`
    LatencyInjectionFaultConfig *LatencyInjectionFaultConfig `json:"latencyInjectionFaultConfig,omitempty"`
    
}

