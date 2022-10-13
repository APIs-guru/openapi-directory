package shared

type GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig struct {
	EnableContinuousRun    *bool    `json:"enableContinuousRun"`
	EnablePredeploymentRun *bool    `json:"enablePredeploymentRun"`
	TestCases              []string `json:"testCases"`
}
