package shared

type Deployment struct {
	Labels    map[string]string `json:"labels"`
	ProjectID *string           `json:"projectId"`
	Target    *string           `json:"target"`
}
