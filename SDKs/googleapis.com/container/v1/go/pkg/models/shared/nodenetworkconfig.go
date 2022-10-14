package shared

type NodeNetworkConfig struct {
	CreatePodRange           *bool                     `json:"createPodRange,omitempty"`
	NetworkPerformanceConfig *NetworkPerformanceConfig `json:"networkPerformanceConfig,omitempty"`
	PodIpv4CidrBlock         *string                   `json:"podIpv4CidrBlock,omitempty"`
	PodRange                 *string                   `json:"podRange,omitempty"`
}
