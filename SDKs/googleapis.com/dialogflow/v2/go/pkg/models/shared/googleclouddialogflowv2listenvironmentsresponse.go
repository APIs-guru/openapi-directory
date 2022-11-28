package shared

// GoogleCloudDialogflowV2ListEnvironmentsResponse
// The response message for Environments.ListEnvironments.
type GoogleCloudDialogflowV2ListEnvironmentsResponse struct {
	Environments  []GoogleCloudDialogflowV2Environment `json:"environments,omitempty"`
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
}
