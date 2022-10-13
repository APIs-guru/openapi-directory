package shared

type SasPortalListDeploymentsResponse struct {
	Deployments   []SasPortalDeployment `json:"deployments"`
	NextPageToken *string               `json:"nextPageToken"`
}
