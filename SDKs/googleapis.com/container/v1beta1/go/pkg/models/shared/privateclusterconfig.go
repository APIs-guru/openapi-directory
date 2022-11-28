package shared

// PrivateClusterConfig
// Configuration options for private clusters.
type PrivateClusterConfig struct {
	EnablePrivateEndpoint     *bool                                   `json:"enablePrivateEndpoint,omitempty"`
	EnablePrivateNodes        *bool                                   `json:"enablePrivateNodes,omitempty"`
	MasterGlobalAccessConfig  *PrivateClusterMasterGlobalAccessConfig `json:"masterGlobalAccessConfig,omitempty"`
	MasterIpv4CidrBlock       *string                                 `json:"masterIpv4CidrBlock,omitempty"`
	PeeringName               *string                                 `json:"peeringName,omitempty"`
	PrivateEndpoint           *string                                 `json:"privateEndpoint,omitempty"`
	PrivateEndpointSubnetwork *string                                 `json:"privateEndpointSubnetwork,omitempty"`
	PublicEndpoint            *string                                 `json:"publicEndpoint,omitempty"`
}
