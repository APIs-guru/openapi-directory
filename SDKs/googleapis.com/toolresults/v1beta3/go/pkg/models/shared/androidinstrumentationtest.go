package shared

// AndroidInstrumentationTest
// A test of an Android application that can control an Android component independently of its normal lifecycle. See for more information on types of Android tests.
type AndroidInstrumentationTest struct {
	TestPackageID   *string  `json:"testPackageId,omitempty"`
	TestRunnerClass *string  `json:"testRunnerClass,omitempty"`
	TestTargets     []string `json:"testTargets,omitempty"`
	UseOrchestrator *bool    `json:"useOrchestrator,omitempty"`
}
