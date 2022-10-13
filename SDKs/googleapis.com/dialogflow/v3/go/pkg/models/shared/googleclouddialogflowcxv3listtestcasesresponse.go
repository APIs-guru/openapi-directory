package shared

type GoogleCloudDialogflowCxV3ListTestCasesResponse struct {
	NextPageToken *string                             `json:"nextPageToken"`
	TestCases     []GoogleCloudDialogflowCxV3TestCase `json:"testCases"`
}
