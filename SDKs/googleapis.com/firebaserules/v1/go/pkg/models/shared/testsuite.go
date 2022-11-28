package shared

// TestSuite
// `TestSuite` is a collection of `TestCase` instances that validate the logical correctness of a `Ruleset`. The `TestSuite` may be referenced in-line within a `TestRuleset` invocation or as part of a `Release` object as a pre-release check.
type TestSuite struct {
	TestCases []TestCase `json:"testCases,omitempty"`
}
