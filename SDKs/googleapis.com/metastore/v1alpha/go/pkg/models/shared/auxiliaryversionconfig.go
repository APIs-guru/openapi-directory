package shared

type AuxiliaryVersionConfig struct {
	ConfigOverrides map[string]string `json:"configOverrides"`
	NetworkConfig   *NetworkConfig    `json:"networkConfig"`
	Version         *string           `json:"version"`
}
