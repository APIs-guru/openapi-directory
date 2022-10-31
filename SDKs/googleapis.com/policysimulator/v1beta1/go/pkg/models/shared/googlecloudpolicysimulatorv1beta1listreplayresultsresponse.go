package shared

type GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse struct {
	NextPageToken *string                                         `json:"nextPageToken,omitempty"`
	ReplayResults []GoogleCloudPolicysimulatorV1beta1ReplayResult `json:"replayResults,omitempty"`
}
