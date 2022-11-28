package shared

// NodeNetworkConfig
// Parameters for node pool-level network config.
type NodeNetworkConfig struct {
	CreatePodRange           *bool                     `json:"createPodRange,omitempty"`
	EnablePrivateNodes       *bool                     `json:"enablePrivateNodes,omitempty"`
	NetworkPerformanceConfig *NetworkPerformanceConfig `json:"networkPerformanceConfig,omitempty"`
	PodIpv4CidrBlock         *string                   `json:"podIpv4CidrBlock,omitempty"`
	PodRange                 *string                   `json:"podRange,omitempty"`
}
