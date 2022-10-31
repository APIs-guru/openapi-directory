package shared

type CreateClusterRequest struct {
	Cluster   *Cluster `json:"cluster,omitempty"`
	Parent    *string  `json:"parent,omitempty"`
	ProjectID *string  `json:"projectId,omitempty"`
	Zone      *string  `json:"zone,omitempty"`
}
