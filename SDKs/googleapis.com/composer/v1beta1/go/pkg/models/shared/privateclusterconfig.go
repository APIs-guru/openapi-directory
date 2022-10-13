package shared

type PrivateClusterConfig struct {
	EnablePrivateEndpoint   *bool   `json:"enablePrivateEndpoint"`
	MasterIpv4CidrBlock     *string `json:"masterIpv4CidrBlock"`
	MasterIpv4ReservedRange *string `json:"masterIpv4ReservedRange"`
}
