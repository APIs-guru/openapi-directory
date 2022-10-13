package shared

type PrivateEnvironmentConfig struct {
	CloudComposerConnectionSubnetwork     *string               `json:"cloudComposerConnectionSubnetwork"`
	CloudComposerNetworkIpv4CidrBlock     *string               `json:"cloudComposerNetworkIpv4CidrBlock"`
	CloudComposerNetworkIpv4ReservedRange *string               `json:"cloudComposerNetworkIpv4ReservedRange"`
	CloudSQLIpv4CidrBlock                 *string               `json:"cloudSqlIpv4CidrBlock"`
	EnablePrivateEnvironment              *bool                 `json:"enablePrivateEnvironment"`
	EnablePrivatelyUsedPublicIps          *bool                 `json:"enablePrivatelyUsedPublicIps"`
	NetworkingConfig                      *NetworkingConfig     `json:"networkingConfig"`
	PrivateClusterConfig                  *PrivateClusterConfig `json:"privateClusterConfig"`
	WebServerIpv4CidrBlock                *string               `json:"webServerIpv4CidrBlock"`
	WebServerIpv4ReservedRange            *string               `json:"webServerIpv4ReservedRange"`
}
