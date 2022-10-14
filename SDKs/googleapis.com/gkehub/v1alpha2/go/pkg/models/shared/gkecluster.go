package shared

type GkeCluster struct {
	ClusterMissing *bool   `json:"clusterMissing,omitempty"`
	ResourceLink   *string `json:"resourceLink,omitempty"`
}
