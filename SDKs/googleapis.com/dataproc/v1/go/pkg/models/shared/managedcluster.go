package shared

type ManagedCluster struct {
	ClusterName *string           `json:"clusterName,omitempty"`
	Config      *ClusterConfig    `json:"config,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
}
