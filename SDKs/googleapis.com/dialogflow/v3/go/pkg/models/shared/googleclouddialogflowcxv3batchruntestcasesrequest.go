package shared

type GoogleCloudDialogflowCxV3BatchRunTestCasesRequest struct {
	Environment *string  `json:"environment"`
	TestCases   []string `json:"testCases"`
}
