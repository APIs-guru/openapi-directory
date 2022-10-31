package shared



type StopClusterRequest struct {
    ClusterUUID *string `json:"clusterUuid,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

