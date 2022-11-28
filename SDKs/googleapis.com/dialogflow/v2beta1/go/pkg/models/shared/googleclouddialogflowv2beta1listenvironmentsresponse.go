package shared

// GoogleCloudDialogflowV2beta1ListEnvironmentsResponse
// The response message for Environments.ListEnvironments.
type GoogleCloudDialogflowV2beta1ListEnvironmentsResponse struct {
	Environments  []GoogleCloudDialogflowV2beta1Environment `json:"environments,omitempty"`
	NextPageToken *string                                   `json:"nextPageToken,omitempty"`
}
