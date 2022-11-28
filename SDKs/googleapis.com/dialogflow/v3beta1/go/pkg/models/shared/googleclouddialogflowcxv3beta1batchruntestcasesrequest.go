package shared

// GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest
// The request message for TestCases.BatchRunTestCases.
type GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest struct {
	Environment *string  `json:"environment,omitempty"`
	TestCases   []string `json:"testCases,omitempty"`
}
