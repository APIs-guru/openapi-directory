package shared

type TestExecutionStep struct {
	TestIssues         []TestIssue         `json:"testIssues,omitempty"`
	TestSuiteOverviews []TestSuiteOverview `json:"testSuiteOverviews,omitempty"`
	TestTiming         *TestTiming         `json:"testTiming,omitempty"`
	ToolExecution      *ToolExecution      `json:"toolExecution,omitempty"`
}
