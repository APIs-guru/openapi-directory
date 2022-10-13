package shared

type MultiCloudCluster struct {
	ClusterMissing *bool   `json:"clusterMissing"`
	ResourceLink   *string `json:"resourceLink"`
}
