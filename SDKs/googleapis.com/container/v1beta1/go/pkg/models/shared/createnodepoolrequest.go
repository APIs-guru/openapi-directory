package shared



type CreateNodePoolRequest struct {
    ClusterID *string `json:"clusterId,omitempty"`
    NodePool *NodePool `json:"nodePool,omitempty"`
    Parent *string `json:"parent,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    Zone *string `json:"zone,omitempty"`
    
}

