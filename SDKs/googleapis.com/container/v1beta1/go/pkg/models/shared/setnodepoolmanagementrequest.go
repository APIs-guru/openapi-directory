package shared

type SetNodePoolManagementRequest struct {
	ClusterID  *string         `json:"clusterId"`
	Management *NodeManagement `json:"management"`
	Name       *string         `json:"name"`
	NodePoolID *string         `json:"nodePoolId"`
	ProjectID  *string         `json:"projectId"`
	Zone       *string         `json:"zone"`
}
