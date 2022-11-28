package shared

// GoogleCloudDialogflowCxV3ListEnvironmentsResponse
// The response message for Environments.ListEnvironments.
type GoogleCloudDialogflowCxV3ListEnvironmentsResponse struct {
	Environments  []GoogleCloudDialogflowCxV3Environment `json:"environments,omitempty"`
	NextPageToken *string                                `json:"nextPageToken,omitempty"`
}
