package shared



type TestRulesetResponse struct {
    Issues []Issue `json:"issues,omitempty"`
    TestResults []TestResult `json:"testResults,omitempty"`
    
}

