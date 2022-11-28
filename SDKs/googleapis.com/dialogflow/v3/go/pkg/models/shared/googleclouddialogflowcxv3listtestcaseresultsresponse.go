package shared

// GoogleCloudDialogflowCxV3ListTestCaseResultsResponse
// The response message for TestCases.ListTestCaseResults.
type GoogleCloudDialogflowCxV3ListTestCaseResultsResponse struct {
	NextPageToken   *string                                   `json:"nextPageToken,omitempty"`
	TestCaseResults []GoogleCloudDialogflowCxV3TestCaseResult `json:"testCaseResults,omitempty"`
}
