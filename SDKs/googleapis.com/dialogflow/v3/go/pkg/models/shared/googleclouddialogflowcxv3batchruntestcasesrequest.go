package shared

// GoogleCloudDialogflowCxV3BatchRunTestCasesRequest
// The request message for TestCases.BatchRunTestCases.
type GoogleCloudDialogflowCxV3BatchRunTestCasesRequest struct {
	Environment *string  `json:"environment,omitempty"`
	TestCases   []string `json:"testCases,omitempty"`
}
