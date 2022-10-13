package shared

type GkeCluster struct {
	ClusterMissing *bool   `json:"clusterMissing"`
	ResourceLink   *string `json:"resourceLink"`
}
