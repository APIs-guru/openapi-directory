package shared

type GoogleCloudDialogflowCxV3beta1ListTestCasesResponse struct {
	NextPageToken *string                                  `json:"nextPageToken"`
	TestCases     []GoogleCloudDialogflowCxV3beta1TestCase `json:"testCases"`
}
