package shared

// TestRulesetRequest
// The request for FirebaseRulesService.TestRuleset.
type TestRulesetRequest struct {
	Source    *Source    `json:"source,omitempty"`
	TestSuite *TestSuite `json:"testSuite,omitempty"`
}
