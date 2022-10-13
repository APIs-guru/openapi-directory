package shared

type GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest struct {
	Environment *string  `json:"environment"`
	TestCases   []string `json:"testCases"`
}
