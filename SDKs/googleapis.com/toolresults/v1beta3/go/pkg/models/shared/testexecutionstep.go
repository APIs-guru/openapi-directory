package shared

type TestExecutionStep struct {
	TestIssues         []TestIssue         `json:"testIssues"`
	TestSuiteOverviews []TestSuiteOverview `json:"testSuiteOverviews"`
	TestTiming         *TestTiming         `json:"testTiming"`
	ToolExecution      *ToolExecution      `json:"toolExecution"`
}
