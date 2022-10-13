package shared

type TestResultStateEnum string

const (
	TestResultStateEnumStateUnspecified TestResultStateEnum = "STATE_UNSPECIFIED"
	TestResultStateEnumSuccess          TestResultStateEnum = "SUCCESS"
	TestResultStateEnumFailure          TestResultStateEnum = "FAILURE"
)

type TestResult struct {
	DebugMessages      []string             `json:"debugMessages"`
	ErrorPosition      *SourcePosition      `json:"errorPosition"`
	ExpressionReports  []ExpressionReport   `json:"expressionReports"`
	FunctionCalls      []FunctionCall       `json:"functionCalls"`
	State              *TestResultStateEnum `json:"state"`
	VisitedExpressions []VisitedExpression  `json:"visitedExpressions"`
}
