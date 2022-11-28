package shared

// GoogleCloudDialogflowCxV3ListDeploymentsResponse
// The response message for Deployments.ListDeployments.
type GoogleCloudDialogflowCxV3ListDeploymentsResponse struct {
	Deployments   []GoogleCloudDialogflowCxV3Deployment `json:"deployments,omitempty"`
	NextPageToken *string                               `json:"nextPageToken,omitempty"`
}
