package shared

type DeploymentsListResponse struct {
	Deployments   []Deployment `json:"deployments"`
	NextPageToken *string      `json:"nextPageToken"`
}
