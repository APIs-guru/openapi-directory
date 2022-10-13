package shared

type CreateClusterRequest struct {
	Cluster   *Cluster `json:"cluster"`
	Parent    *string  `json:"parent"`
	ProjectID *string  `json:"projectId"`
	Zone      *string  `json:"zone"`
}
