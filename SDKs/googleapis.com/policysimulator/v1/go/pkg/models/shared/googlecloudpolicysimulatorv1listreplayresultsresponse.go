package shared

type GoogleCloudPolicysimulatorV1ListReplayResultsResponse struct {
	NextPageToken *string                                    `json:"nextPageToken"`
	ReplayResults []GoogleCloudPolicysimulatorV1ReplayResult `json:"replayResults"`
}
