package shared

type DeploymentsListResponse struct {
	Deployments   []Deployment `json:"deployments,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
