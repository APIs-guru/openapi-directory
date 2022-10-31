package shared



type SingleClusterRouting struct {
    AllowTransactionalWrites *bool `json:"allowTransactionalWrites,omitempty"`
    ClusterID *string `json:"clusterId,omitempty"`
    
}

