package shared

type GoogleCloudDialogflowV2EnvironmentHistory struct {
	Entries       []GoogleCloudDialogflowV2EnvironmentHistoryEntry `json:"entries"`
	NextPageToken *string                                          `json:"nextPageToken"`
	Parent        *string                                          `json:"parent"`
}
