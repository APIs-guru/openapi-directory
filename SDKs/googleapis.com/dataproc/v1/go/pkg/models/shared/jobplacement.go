package shared



type JobPlacement struct {
    ClusterLabels map[string]string `json:"clusterLabels,omitempty"`
    ClusterName *string `json:"clusterName,omitempty"`
    ClusterUUID *string `json:"clusterUuid,omitempty"`
    
}

