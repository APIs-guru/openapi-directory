package shared

// GoogleCloudDialogflowCxV3LookupEnvironmentHistoryResponse
// The response message for Environments.LookupEnvironmentHistory.
type GoogleCloudDialogflowCxV3LookupEnvironmentHistoryResponse struct {
	Environments  []GoogleCloudDialogflowCxV3Environment `json:"environments,omitempty"`
	NextPageToken *string                                `json:"nextPageToken,omitempty"`
}
