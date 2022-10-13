package shared

type CompleteIPRotationRequest struct {
	ClusterID *string `json:"clusterId"`
	Name      *string `json:"name"`
	ProjectID *string `json:"projectId"`
	Zone      *string `json:"zone"`
}
