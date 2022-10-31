package shared

type TestRulesetRequest struct {
	Source    *Source    `json:"source,omitempty"`
	TestSuite *TestSuite `json:"testSuite,omitempty"`
}
