package shared



type SetNodePoolSizeRequest struct {
    ClusterID *string `json:"clusterId,omitempty"`
    Name *string `json:"name,omitempty"`
    NodeCount *int32 `json:"nodeCount,omitempty"`
    NodePoolID *string `json:"nodePoolId,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    Zone *string `json:"zone,omitempty"`
    
}

