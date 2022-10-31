package shared

type SetNodePoolManagementRequest struct {
	ClusterID  *string         `json:"clusterId,omitempty"`
	Management *NodeManagement `json:"management,omitempty"`
	Name       *string         `json:"name,omitempty"`
	NodePoolID *string         `json:"nodePoolId,omitempty"`
	ProjectID  *string         `json:"projectId,omitempty"`
	Zone       *string         `json:"zone,omitempty"`
}
