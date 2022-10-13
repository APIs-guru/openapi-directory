package shared

type StopClusterRequest struct {
	ClusterUUID *string `json:"clusterUuid"`
	RequestID   *string `json:"requestId"`
}
