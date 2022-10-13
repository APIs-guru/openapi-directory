package shared

type GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse struct {
	ContinuousTestResults []GoogleCloudDialogflowCxV3beta1ContinuousTestResult `json:"continuousTestResults"`
	NextPageToken         *string                                              `json:"nextPageToken"`
}
