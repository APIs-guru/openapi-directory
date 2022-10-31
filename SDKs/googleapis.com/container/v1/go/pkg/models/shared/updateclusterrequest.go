package shared

type UpdateClusterRequest struct {
	ClusterID *string        `json:"clusterId,omitempty"`
	Name      *string        `json:"name,omitempty"`
	ProjectID *string        `json:"projectId,omitempty"`
	Update    *ClusterUpdate `json:"update,omitempty"`
	Zone      *string        `json:"zone,omitempty"`
}
