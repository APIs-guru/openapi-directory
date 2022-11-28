package shared

// DeploymentsListResponse
// A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated.
type DeploymentsListResponse struct {
	Deployments   []Deployment `json:"deployments,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
