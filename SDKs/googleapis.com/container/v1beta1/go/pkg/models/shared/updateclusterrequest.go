package shared

type UpdateClusterRequest struct {
	ClusterID *string        `json:"clusterId"`
	Name      *string        `json:"name"`
	ProjectID *string        `json:"projectId"`
	Update    *ClusterUpdate `json:"update"`
	Zone      *string        `json:"zone"`
}
