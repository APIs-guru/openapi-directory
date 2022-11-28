package shared

// StartClusterRequest
// A request to start a cluster.
type StartClusterRequest struct {
	ClusterUUID *string `json:"clusterUuid,omitempty"`
	RequestID   *string `json:"requestId,omitempty"`
}
