package shared

type StartClusterRequest struct {
	ClusterUUID *string `json:"clusterUuid"`
	RequestID   *string `json:"requestId"`
}
