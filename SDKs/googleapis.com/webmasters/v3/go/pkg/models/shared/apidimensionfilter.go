package shared

type APIDimensionFilter struct {
	Dimension  *string `json:"dimension"`
	Expression *string `json:"expression"`
	Operator   *string `json:"operator"`
}
