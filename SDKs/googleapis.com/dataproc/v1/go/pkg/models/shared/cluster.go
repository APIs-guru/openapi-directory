package shared

type Cluster struct {
	ClusterName          *string               `json:"clusterName"`
	ClusterUUID          *string               `json:"clusterUuid"`
	Config               *ClusterConfig        `json:"config"`
	Labels               map[string]string     `json:"labels"`
	Metrics              *ClusterMetrics       `json:"metrics"`
	ProjectID            *string               `json:"projectId"`
	Status               *ClusterStatus        `json:"status"`
	StatusHistory        []ClusterStatus       `json:"statusHistory"`
	VirtualClusterConfig *VirtualClusterConfig `json:"virtualClusterConfig"`
}
