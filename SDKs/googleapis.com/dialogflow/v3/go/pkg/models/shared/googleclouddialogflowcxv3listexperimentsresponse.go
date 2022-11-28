package shared

// GoogleCloudDialogflowCxV3ListExperimentsResponse
// The response message for Experiments.ListExperiments.
type GoogleCloudDialogflowCxV3ListExperimentsResponse struct {
	Experiments   []GoogleCloudDialogflowCxV3Experiment `json:"experiments,omitempty"`
	NextPageToken *string                               `json:"nextPageToken,omitempty"`
}
