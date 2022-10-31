package shared

type APIDimensionFilter struct {
	Dimension  *string `json:"dimension,omitempty"`
	Expression *string `json:"expression,omitempty"`
	Operator   *string `json:"operator,omitempty"`
}
