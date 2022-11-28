package shared

// ListDeploymentsResponse
// Response with the list of deployments for the specified Apps Script project.
type ListDeploymentsResponse struct {
	Deployments   []Deployment `json:"deployments,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
