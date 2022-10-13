package shared

type ListTestCasesResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	TestCases     []TestCase `json:"testCases"`
}
