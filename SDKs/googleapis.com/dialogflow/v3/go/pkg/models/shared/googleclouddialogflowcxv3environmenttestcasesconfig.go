package shared

type GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig struct {
	EnableContinuousRun    *bool    `json:"enableContinuousRun"`
	EnablePredeploymentRun *bool    `json:"enablePredeploymentRun"`
	TestCases              []string `json:"testCases"`
}
