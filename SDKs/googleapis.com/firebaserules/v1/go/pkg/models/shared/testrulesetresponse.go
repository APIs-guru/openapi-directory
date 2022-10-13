package shared

type TestRulesetResponse struct {
	Issues      []Issue      `json:"issues"`
	TestResults []TestResult `json:"testResults"`
}
