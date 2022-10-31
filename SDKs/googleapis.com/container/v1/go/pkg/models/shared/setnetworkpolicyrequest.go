package shared



type SetNetworkPolicyRequest struct {
    ClusterID *string `json:"clusterId,omitempty"`
    Name *string `json:"name,omitempty"`
    NetworkPolicy *NetworkPolicy `json:"networkPolicy,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    Zone *string `json:"zone,omitempty"`
    
}

