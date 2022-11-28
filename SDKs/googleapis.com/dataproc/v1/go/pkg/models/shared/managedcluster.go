package shared

// ManagedCluster
// Cluster that is managed by the workflow.
type ManagedCluster struct {
	ClusterName *string           `json:"clusterName,omitempty"`
	Config      *ClusterConfig    `json:"config,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
}

// ManagedClusterInput
// Cluster that is managed by the workflow.
type ManagedClusterInput struct {
	ClusterName *string             `json:"clusterName,omitempty"`
	Config      *ClusterConfigInput `json:"config,omitempty"`
	Labels      map[string]string   `json:"labels,omitempty"`
}
