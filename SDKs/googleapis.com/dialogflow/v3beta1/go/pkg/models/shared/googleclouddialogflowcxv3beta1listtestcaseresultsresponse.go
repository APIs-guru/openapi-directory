package shared

// GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse
// The response message for TestCases.ListTestCaseResults.
type GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse struct {
	NextPageToken   *string                                        `json:"nextPageToken,omitempty"`
	TestCaseResults []GoogleCloudDialogflowCxV3beta1TestCaseResult `json:"testCaseResults,omitempty"`
}
