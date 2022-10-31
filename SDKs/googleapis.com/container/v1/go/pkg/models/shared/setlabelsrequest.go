package shared



type SetLabelsRequest struct {
    ClusterID *string `json:"clusterId,omitempty"`
    LabelFingerprint *string `json:"labelFingerprint,omitempty"`
    Name *string `json:"name,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    ResourceLabels map[string]string `json:"resourceLabels,omitempty"`
    Zone *string `json:"zone,omitempty"`
    
}

