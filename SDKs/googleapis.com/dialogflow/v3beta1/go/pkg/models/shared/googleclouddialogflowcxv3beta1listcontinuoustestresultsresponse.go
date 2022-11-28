package shared

// GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse
// The response message for Environments.ListTestCaseResults.
type GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse struct {
	ContinuousTestResults []GoogleCloudDialogflowCxV3beta1ContinuousTestResult `json:"continuousTestResults,omitempty"`
	NextPageToken         *string                                              `json:"nextPageToken,omitempty"`
}
