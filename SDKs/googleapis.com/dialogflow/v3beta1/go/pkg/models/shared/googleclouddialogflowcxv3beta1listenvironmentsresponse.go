package shared

// GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse
// The response message for Environments.ListEnvironments.
type GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse struct {
	Environments  []GoogleCloudDialogflowCxV3beta1Environment `json:"environments,omitempty"`
	NextPageToken *string                                     `json:"nextPageToken,omitempty"`
}
