package shared

// GoogleCloudPolicysimulatorV1ListReplayResultsResponse
// Response message for Simulator.ListReplayResults.
type GoogleCloudPolicysimulatorV1ListReplayResultsResponse struct {
	NextPageToken *string                                    `json:"nextPageToken,omitempty"`
	ReplayResults []GoogleCloudPolicysimulatorV1ReplayResult `json:"replayResults,omitempty"`
}
