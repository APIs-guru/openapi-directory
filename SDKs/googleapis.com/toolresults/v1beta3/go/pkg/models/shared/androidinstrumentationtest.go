package shared



type AndroidInstrumentationTest struct {
    TestPackageID *string `json:"testPackageId,omitempty"`
    TestRunnerClass *string `json:"testRunnerClass,omitempty"`
    TestTargets []string `json:"testTargets,omitempty"`
    UseOrchestrator *bool `json:"useOrchestrator,omitempty"`
    
}

