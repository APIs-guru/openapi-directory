package shared

type MultiCloudCluster struct {
	ClusterMissing *bool   `json:"clusterMissing,omitempty"`
	ResourceLink   *string `json:"resourceLink,omitempty"`
}
