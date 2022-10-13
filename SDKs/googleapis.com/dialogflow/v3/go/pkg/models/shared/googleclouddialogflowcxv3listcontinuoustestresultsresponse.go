package shared

type GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse struct {
	ContinuousTestResults []GoogleCloudDialogflowCxV3ContinuousTestResult `json:"continuousTestResults"`
	NextPageToken         *string                                         `json:"nextPageToken"`
}
