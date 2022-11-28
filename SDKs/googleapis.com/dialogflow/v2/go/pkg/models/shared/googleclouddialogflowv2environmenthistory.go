package shared

// GoogleCloudDialogflowV2EnvironmentHistory
// The response message for Environments.GetEnvironmentHistory.
type GoogleCloudDialogflowV2EnvironmentHistory struct {
	Entries       []GoogleCloudDialogflowV2EnvironmentHistoryEntry `json:"entries,omitempty"`
	NextPageToken *string                                          `json:"nextPageToken,omitempty"`
	Parent        *string                                          `json:"parent,omitempty"`
}
