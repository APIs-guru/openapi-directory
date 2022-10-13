package shared

type NodeNetworkConfig struct {
	CreatePodRange           *bool                     `json:"createPodRange"`
	NetworkPerformanceConfig *NetworkPerformanceConfig `json:"networkPerformanceConfig"`
	PodIpv4CidrBlock         *string                   `json:"podIpv4CidrBlock"`
	PodRange                 *string                   `json:"podRange"`
}
