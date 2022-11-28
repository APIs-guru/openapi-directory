package shared

// GoogleCloudDialogflowV2beta1EnvironmentHistory
// The response message for Environments.GetEnvironmentHistory.
type GoogleCloudDialogflowV2beta1EnvironmentHistory struct {
	Entries       []GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry `json:"entries,omitempty"`
	NextPageToken *string                                               `json:"nextPageToken,omitempty"`
	Parent        *string                                               `json:"parent,omitempty"`
}
