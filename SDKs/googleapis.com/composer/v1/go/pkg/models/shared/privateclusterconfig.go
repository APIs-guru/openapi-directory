package shared

type PrivateClusterConfig struct {
	EnablePrivateEndpoint   *bool   `json:"enablePrivateEndpoint,omitempty"`
	MasterIpv4CidrBlock     *string `json:"masterIpv4CidrBlock,omitempty"`
	MasterIpv4ReservedRange *string `json:"masterIpv4ReservedRange,omitempty"`
}
