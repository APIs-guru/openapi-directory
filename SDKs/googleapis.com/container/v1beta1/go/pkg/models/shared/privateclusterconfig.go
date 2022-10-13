package shared

type PrivateClusterConfig struct {
	EnablePrivateEndpoint    *bool                                   `json:"enablePrivateEndpoint"`
	EnablePrivateNodes       *bool                                   `json:"enablePrivateNodes"`
	MasterGlobalAccessConfig *PrivateClusterMasterGlobalAccessConfig `json:"masterGlobalAccessConfig"`
	MasterIpv4CidrBlock      *string                                 `json:"masterIpv4CidrBlock"`
	PeeringName              *string                                 `json:"peeringName"`
	PrivateEndpoint          *string                                 `json:"privateEndpoint"`
	PublicEndpoint           *string                                 `json:"publicEndpoint"`
}
