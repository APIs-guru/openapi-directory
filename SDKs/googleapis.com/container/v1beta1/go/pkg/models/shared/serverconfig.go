package shared

type ServerConfig struct {
	Channels              []ReleaseChannelConfig     `json:"channels"`
	DefaultClusterVersion *string                    `json:"defaultClusterVersion"`
	DefaultImageType      *string                    `json:"defaultImageType"`
	ValidImageTypes       []string                   `json:"validImageTypes"`
	ValidMasterVersions   []string                   `json:"validMasterVersions"`
	ValidNodeVersions     []string                   `json:"validNodeVersions"`
	WindowsVersionMaps    map[string]WindowsVersions `json:"windowsVersionMaps"`
}
