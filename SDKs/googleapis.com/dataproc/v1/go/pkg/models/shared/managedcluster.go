package shared

type ManagedCluster struct {
	ClusterName *string           `json:"clusterName"`
	Config      *ClusterConfig    `json:"config"`
	Labels      map[string]string `json:"labels"`
}
