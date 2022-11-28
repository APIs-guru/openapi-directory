package shared

// TestExecutionStep
// A step that represents running tests. It accepts ant-junit xml files which will be parsed into structured test results by the service. Xml file paths are updated in order to append more files, however they can't be deleted. Users can also add test results manually by using the test_result field.
type TestExecutionStep struct {
	TestIssues         []TestIssue         `json:"testIssues,omitempty"`
	TestSuiteOverviews []TestSuiteOverview `json:"testSuiteOverviews,omitempty"`
	TestTiming         *TestTiming         `json:"testTiming,omitempty"`
	ToolExecution      *ToolExecution      `json:"toolExecution,omitempty"`
}
