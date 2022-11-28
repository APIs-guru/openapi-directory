package shared

// GoogleCloudDialogflowCxV3beta1ListTestCasesResponse
// The response message for TestCases.ListTestCases.
type GoogleCloudDialogflowCxV3beta1ListTestCasesResponse struct {
	NextPageToken *string                                  `json:"nextPageToken,omitempty"`
	TestCases     []GoogleCloudDialogflowCxV3beta1TestCase `json:"testCases,omitempty"`
}
