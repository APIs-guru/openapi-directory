package shared

// GkeCluster
// GkeCluster contains information specific to GKE clusters.
type GkeCluster struct {
	ClusterMissing *bool   `json:"clusterMissing,omitempty"`
	ResourceLink   *string `json:"resourceLink,omitempty"`
}

// GkeClusterInput
// GkeCluster contains information specific to GKE clusters.
type GkeClusterInput struct {
	ResourceLink *string `json:"resourceLink,omitempty"`
}
