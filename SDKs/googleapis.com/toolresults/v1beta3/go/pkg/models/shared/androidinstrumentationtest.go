package shared

type AndroidInstrumentationTest struct {
	TestPackageID   *string  `json:"testPackageId"`
	TestRunnerClass *string  `json:"testRunnerClass"`
	TestTargets     []string `json:"testTargets"`
	UseOrchestrator *bool    `json:"useOrchestrator"`
}
