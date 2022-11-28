package shared

// GoogleCloudDialogflowCxV3ListTestCasesResponse
// The response message for TestCases.ListTestCases.
type GoogleCloudDialogflowCxV3ListTestCasesResponse struct {
	NextPageToken *string                             `json:"nextPageToken,omitempty"`
	TestCases     []GoogleCloudDialogflowCxV3TestCase `json:"testCases,omitempty"`
}
