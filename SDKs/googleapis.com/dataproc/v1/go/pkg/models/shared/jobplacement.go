package shared

// JobPlacementInput
// Dataproc job config.
type JobPlacementInput struct {
	ClusterLabels map[string]string `json:"clusterLabels,omitempty"`
	ClusterName   *string           `json:"clusterName,omitempty"`
}

// JobPlacement
// Dataproc job config.
type JobPlacement struct {
	ClusterLabels map[string]string `json:"clusterLabels,omitempty"`
	ClusterName   *string           `json:"clusterName,omitempty"`
	ClusterUUID   *string           `json:"clusterUuid,omitempty"`
}
