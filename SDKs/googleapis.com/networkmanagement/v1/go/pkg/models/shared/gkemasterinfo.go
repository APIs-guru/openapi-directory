package shared

// GkeMasterInfo
// For display only. Metadata associated with a Google Kubernetes Engine (GKE) cluster master.
type GkeMasterInfo struct {
	ClusterNetworkURI *string `json:"clusterNetworkUri,omitempty"`
	ClusterURI        *string `json:"clusterUri,omitempty"`
	ExternalIP        *string `json:"externalIp,omitempty"`
	InternalIP        *string `json:"internalIp,omitempty"`
}
