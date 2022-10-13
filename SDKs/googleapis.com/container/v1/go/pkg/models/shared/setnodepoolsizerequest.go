package shared

type SetNodePoolSizeRequest struct {
	ClusterID  *string `json:"clusterId"`
	Name       *string `json:"name"`
	NodeCount  *int32  `json:"nodeCount"`
	NodePoolID *string `json:"nodePoolId"`
	ProjectID  *string `json:"projectId"`
	Zone       *string `json:"zone"`
}
