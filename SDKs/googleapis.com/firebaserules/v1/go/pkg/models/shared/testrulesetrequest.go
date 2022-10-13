package shared

type TestRulesetRequest struct {
	Source    *Source    `json:"source"`
	TestSuite *TestSuite `json:"testSuite"`
}
