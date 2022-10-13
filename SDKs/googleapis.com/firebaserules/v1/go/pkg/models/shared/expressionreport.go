package shared

type ExpressionReport struct {
	Children       []ExpressionReport `json:"children"`
	SourcePosition *SourcePosition    `json:"sourcePosition"`
	Values         []ValueCount       `json:"values"`
}
