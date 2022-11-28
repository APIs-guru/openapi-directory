package shared

// GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse
// The response message for Environments.LookupEnvironmentHistory.
type GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse struct {
	Environments  []GoogleCloudDialogflowCxV3beta1Environment `json:"environments,omitempty"`
	NextPageToken *string                                     `json:"nextPageToken,omitempty"`
}
