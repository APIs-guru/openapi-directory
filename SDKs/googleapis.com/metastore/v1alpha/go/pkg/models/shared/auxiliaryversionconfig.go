package shared

// AuxiliaryVersionConfig
// Configuration information for the auxiliary service versions.
type AuxiliaryVersionConfig struct {
	ConfigOverrides map[string]string `json:"configOverrides,omitempty"`
	NetworkConfig   *NetworkConfig    `json:"networkConfig,omitempty"`
	Version         *string           `json:"version,omitempty"`
}

// AuxiliaryVersionConfigInput
// Configuration information for the auxiliary service versions.
type AuxiliaryVersionConfigInput struct {
	ConfigOverrides map[string]string   `json:"configOverrides,omitempty"`
	NetworkConfig   *NetworkConfigInput `json:"networkConfig,omitempty"`
	Version         *string             `json:"version,omitempty"`
}
