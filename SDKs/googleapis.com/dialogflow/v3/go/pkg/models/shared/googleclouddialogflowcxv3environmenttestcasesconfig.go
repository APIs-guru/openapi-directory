package shared

// GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig
// The configuration for continuous tests.
type GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig struct {
	EnableContinuousRun    *bool    `json:"enableContinuousRun,omitempty"`
	EnablePredeploymentRun *bool    `json:"enablePredeploymentRun,omitempty"`
	TestCases              []string `json:"testCases,omitempty"`
}
