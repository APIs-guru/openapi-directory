package shared

type GkeMasterInfo struct {
	ClusterNetworkURI *string `json:"clusterNetworkUri"`
	ClusterURI        *string `json:"clusterUri"`
	ExternalIP        *string `json:"externalIp"`
	InternalIP        *string `json:"internalIp"`
}
