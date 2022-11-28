package shared

// SasPortalListDeploymentsResponse
// Response for ListDeployments.
type SasPortalListDeploymentsResponse struct {
	Deployments   []SasPortalDeployment `json:"deployments,omitempty"`
	NextPageToken *string               `json:"nextPageToken,omitempty"`
}
