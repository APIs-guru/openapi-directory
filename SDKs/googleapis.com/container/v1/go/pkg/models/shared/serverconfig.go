package shared

// ServerConfig
// Kubernetes Engine service configuration.
type ServerConfig struct {
	Channels              []ReleaseChannelConfig `json:"channels,omitempty"`
	DefaultClusterVersion *string                `json:"defaultClusterVersion,omitempty"`
	DefaultImageType      *string                `json:"defaultImageType,omitempty"`
	ValidImageTypes       []string               `json:"validImageTypes,omitempty"`
	ValidMasterVersions   []string               `json:"validMasterVersions,omitempty"`
	ValidNodeVersions     []string               `json:"validNodeVersions,omitempty"`
}
