package shared

type GoogleCloudDialogflowCxV3beta1ListExperimentsResponse struct {
	Experiments   []GoogleCloudDialogflowCxV3beta1Experiment `json:"experiments"`
	NextPageToken *string                                    `json:"nextPageToken"`
}
