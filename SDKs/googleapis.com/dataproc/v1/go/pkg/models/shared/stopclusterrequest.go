package shared

// StopClusterRequest
// A request to stop a cluster.
type StopClusterRequest struct {
	ClusterUUID *string `json:"clusterUuid,omitempty"`
	RequestID   *string `json:"requestId,omitempty"`
}
