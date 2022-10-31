package shared



type UpdateMasterRequest struct {
    ClusterID *string `json:"clusterId,omitempty"`
    MasterVersion *string `json:"masterVersion,omitempty"`
    Name *string `json:"name,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    Zone *string `json:"zone,omitempty"`
    
}

