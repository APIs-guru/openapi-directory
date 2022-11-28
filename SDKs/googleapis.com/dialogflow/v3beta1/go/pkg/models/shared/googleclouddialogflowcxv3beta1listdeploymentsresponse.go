package shared

// GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse
// The response message for Deployments.ListDeployments.
type GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse struct {
	Deployments   []GoogleCloudDialogflowCxV3beta1Deployment `json:"deployments,omitempty"`
	NextPageToken *string                                    `json:"nextPageToken,omitempty"`
}
