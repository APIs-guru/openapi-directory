package shared

// MultiCloudCluster
// MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.
type MultiCloudCluster struct {
	ClusterMissing *bool   `json:"clusterMissing,omitempty"`
	ResourceLink   *string `json:"resourceLink,omitempty"`
}

// MultiCloudClusterInput
// MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.
type MultiCloudClusterInput struct {
	ResourceLink *string `json:"resourceLink,omitempty"`
}
