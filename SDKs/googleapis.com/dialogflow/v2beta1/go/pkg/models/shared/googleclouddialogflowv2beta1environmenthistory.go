package shared

type GoogleCloudDialogflowV2beta1EnvironmentHistory struct {
	Entries       []GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry `json:"entries"`
	NextPageToken *string                                               `json:"nextPageToken"`
	Parent        *string                                               `json:"parent"`
}
