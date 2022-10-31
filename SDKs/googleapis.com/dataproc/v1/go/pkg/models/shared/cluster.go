package shared



type Cluster struct {
    ClusterName *string `json:"clusterName,omitempty"`
    ClusterUUID *string `json:"clusterUuid,omitempty"`
    Config *ClusterConfig `json:"config,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Metrics *ClusterMetrics `json:"metrics,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    Status *ClusterStatus `json:"status,omitempty"`
    StatusHistory []ClusterStatus `json:"statusHistory,omitempty"`
    VirtualClusterConfig *VirtualClusterConfig `json:"virtualClusterConfig,omitempty"`
    
}

