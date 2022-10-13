package shared

type GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse struct {
	Deployments   []GoogleCloudDialogflowCxV3beta1Deployment `json:"deployments"`
	NextPageToken *string                                    `json:"nextPageToken"`
}
