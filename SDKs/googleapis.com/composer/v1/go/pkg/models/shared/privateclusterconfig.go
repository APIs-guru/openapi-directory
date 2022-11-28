package shared

// PrivateClusterConfigInput
// Configuration options for the private GKE cluster in a Cloud Composer environment.
type PrivateClusterConfigInput struct {
	EnablePrivateEndpoint *bool   `json:"enablePrivateEndpoint,omitempty"`
	MasterIpv4CidrBlock   *string `json:"masterIpv4CidrBlock,omitempty"`
}

// PrivateClusterConfig
// Configuration options for the private GKE cluster in a Cloud Composer environment.
type PrivateClusterConfig struct {
	EnablePrivateEndpoint   *bool   `json:"enablePrivateEndpoint,omitempty"`
	MasterIpv4CidrBlock     *string `json:"masterIpv4CidrBlock,omitempty"`
	MasterIpv4ReservedRange *string `json:"masterIpv4ReservedRange,omitempty"`
}
