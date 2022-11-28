package shared

// ListTestCasesResponse
// Response message for StepService.ListTestCases.
type ListTestCasesResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	TestCases     []TestCase `json:"testCases,omitempty"`
}
