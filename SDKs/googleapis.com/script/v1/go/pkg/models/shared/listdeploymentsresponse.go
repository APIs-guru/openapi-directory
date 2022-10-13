package shared

type ListDeploymentsResponse struct {
	Deployments   []Deployment `json:"deployments"`
	NextPageToken *string      `json:"nextPageToken"`
}
