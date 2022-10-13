package shared

type GoogleCloudDialogflowCxV3ListDeploymentsResponse struct {
	Deployments   []GoogleCloudDialogflowCxV3Deployment `json:"deployments"`
	NextPageToken *string                               `json:"nextPageToken"`
}
