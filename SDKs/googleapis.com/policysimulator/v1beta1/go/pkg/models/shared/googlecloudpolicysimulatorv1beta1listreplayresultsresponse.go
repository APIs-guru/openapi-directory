package shared

// GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse
// Response message for Simulator.ListReplayResults.
type GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse struct {
	NextPageToken *string                                         `json:"nextPageToken,omitempty"`
	ReplayResults []GoogleCloudPolicysimulatorV1beta1ReplayResult `json:"replayResults,omitempty"`
}
