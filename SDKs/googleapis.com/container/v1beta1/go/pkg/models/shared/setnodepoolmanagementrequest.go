package shared

// SetNodePoolManagementRequest
// SetNodePoolManagementRequest sets the node management properties of a node pool.
type SetNodePoolManagementRequest struct {
	ClusterID  *string         `json:"clusterId,omitempty"`
	Management *NodeManagement `json:"management,omitempty"`
	Name       *string         `json:"name,omitempty"`
	NodePoolID *string         `json:"nodePoolId,omitempty"`
	ProjectID  *string         `json:"projectId,omitempty"`
	Zone       *string         `json:"zone,omitempty"`
}
