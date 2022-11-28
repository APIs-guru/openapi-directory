package shared

// GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse
// The response message for Environments.ListTestCaseResults.
type GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse struct {
	ContinuousTestResults []GoogleCloudDialogflowCxV3ContinuousTestResult `json:"continuousTestResults,omitempty"`
	NextPageToken         *string                                         `json:"nextPageToken,omitempty"`
}
