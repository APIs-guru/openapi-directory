package shared




type TestResultStateEnum string

const (
    TestResultStateEnumStateUnspecified TestResultStateEnum = "STATE_UNSPECIFIED"
TestResultStateEnumSuccess TestResultStateEnum = "SUCCESS"
TestResultStateEnumFailure TestResultStateEnum = "FAILURE"
)


type TestResult struct {
    DebugMessages []string `json:"debugMessages,omitempty"`
    ErrorPosition *SourcePosition `json:"errorPosition,omitempty"`
    ExpressionReports []ExpressionReport `json:"expressionReports,omitempty"`
    FunctionCalls []FunctionCall `json:"functionCalls,omitempty"`
    State *TestResultStateEnum `json:"state,omitempty"`
    VisitedExpressions []VisitedExpression `json:"visitedExpressions,omitempty"`
    
}

