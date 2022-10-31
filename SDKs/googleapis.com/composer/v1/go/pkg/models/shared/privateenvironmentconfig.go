package shared



type PrivateEnvironmentConfig struct {
    CloudComposerConnectionSubnetwork *string `json:"cloudComposerConnectionSubnetwork,omitempty"`
    CloudComposerNetworkIpv4CidrBlock *string `json:"cloudComposerNetworkIpv4CidrBlock,omitempty"`
    CloudComposerNetworkIpv4ReservedRange *string `json:"cloudComposerNetworkIpv4ReservedRange,omitempty"`
    CloudSQLIpv4CidrBlock *string `json:"cloudSqlIpv4CidrBlock,omitempty"`
    EnablePrivateEnvironment *bool `json:"enablePrivateEnvironment,omitempty"`
    EnablePrivatelyUsedPublicIps *bool `json:"enablePrivatelyUsedPublicIps,omitempty"`
    PrivateClusterConfig *PrivateClusterConfig `json:"privateClusterConfig,omitempty"`
    WebServerIpv4CidrBlock *string `json:"webServerIpv4CidrBlock,omitempty"`
    WebServerIpv4ReservedRange *string `json:"webServerIpv4ReservedRange,omitempty"`
    
}

