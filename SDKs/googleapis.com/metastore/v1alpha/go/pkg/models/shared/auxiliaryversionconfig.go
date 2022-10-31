package shared



type AuxiliaryVersionConfig struct {
    ConfigOverrides map[string]string `json:"configOverrides,omitempty"`
    NetworkConfig *NetworkConfig `json:"networkConfig,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

