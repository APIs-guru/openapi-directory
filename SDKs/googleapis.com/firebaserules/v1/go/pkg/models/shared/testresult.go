package shared

type TestResultStateEnum string

const (
	TestResultStateEnumStateUnspecified TestResultStateEnum = "STATE_UNSPECIFIED"
	TestResultStateEnumSuccess          TestResultStateEnum = "SUCCESS"
	TestResultStateEnumFailure          TestResultStateEnum = "FAILURE"
)

// TestResult
// Test result message containing the state of the test as well as a description and source position for test failures.
type TestResult struct {
	DebugMessages      []string             `json:"debugMessages,omitempty"`
	ErrorPosition      *SourcePosition      `json:"errorPosition,omitempty"`
	ExpressionReports  []ExpressionReport   `json:"expressionReports,omitempty"`
	FunctionCalls      []FunctionCall       `json:"functionCalls,omitempty"`
	State              *TestResultStateEnum `json:"state,omitempty"`
	VisitedExpressions []VisitedExpression  `json:"visitedExpressions,omitempty"`
}
