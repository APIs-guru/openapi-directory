package shared

type GoogleCloudDialogflowCxV3ListExperimentsResponse struct {
	Experiments   []GoogleCloudDialogflowCxV3Experiment `json:"experiments"`
	NextPageToken *string                               `json:"nextPageToken"`
}
