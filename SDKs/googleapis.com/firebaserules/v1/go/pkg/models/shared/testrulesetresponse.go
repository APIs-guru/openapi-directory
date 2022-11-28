package shared

// TestRulesetResponse
// The response for FirebaseRulesService.TestRuleset.
type TestRulesetResponse struct {
	Issues      []Issue      `json:"issues,omitempty"`
	TestResults []TestResult `json:"testResults,omitempty"`
}
