package shared

type SasPortalListDeploymentsResponse struct {
	Deployments   []SasPortalDeployment `json:"deployments,omitempty"`
	NextPageToken *string               `json:"nextPageToken,omitempty"`
}
