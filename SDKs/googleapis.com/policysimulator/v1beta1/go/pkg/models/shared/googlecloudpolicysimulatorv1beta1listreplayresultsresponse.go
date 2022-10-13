package shared

type GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse struct {
	NextPageToken *string                                         `json:"nextPageToken"`
	ReplayResults []GoogleCloudPolicysimulatorV1beta1ReplayResult `json:"replayResults"`
}
