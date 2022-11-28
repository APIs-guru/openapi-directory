package shared

// ExpressionReport
// Describes where in a file an expression is found and what it was evaluated to over the course of its use.
type ExpressionReport struct {
	Children       []ExpressionReport `json:"children,omitempty"`
	SourcePosition *SourcePosition    `json:"sourcePosition,omitempty"`
	Values         []ValueCount       `json:"values,omitempty"`
}
