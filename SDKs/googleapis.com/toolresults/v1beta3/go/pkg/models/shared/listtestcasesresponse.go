package shared

type ListTestCasesResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	TestCases     []TestCase `json:"testCases,omitempty"`
}
