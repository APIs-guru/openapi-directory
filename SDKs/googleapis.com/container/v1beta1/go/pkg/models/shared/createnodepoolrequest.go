package shared

type CreateNodePoolRequest struct {
	ClusterID *string   `json:"clusterId"`
	NodePool  *NodePool `json:"nodePool"`
	Parent    *string   `json:"parent"`
	ProjectID *string   `json:"projectId"`
	Zone      *string   `json:"zone"`
}
