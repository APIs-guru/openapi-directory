package shared

// GoogleCloudDialogflowCxV3beta1ListExperimentsResponse
// The response message for Experiments.ListExperiments.
type GoogleCloudDialogflowCxV3beta1ListExperimentsResponse struct {
	Experiments   []GoogleCloudDialogflowCxV3beta1Experiment `json:"experiments,omitempty"`
	NextPageToken *string                                    `json:"nextPageToken,omitempty"`
}
