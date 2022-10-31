package shared

type ExpressionReport struct {
	Children       []ExpressionReport `json:"children,omitempty"`
	SourcePosition *SourcePosition    `json:"sourcePosition,omitempty"`
	Values         []ValueCount       `json:"values,omitempty"`
}
