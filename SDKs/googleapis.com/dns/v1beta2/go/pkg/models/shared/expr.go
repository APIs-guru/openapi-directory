package shared

type Expr struct {
	Description *string `json:"description"`
	Expression  *string `json:"expression"`
	Location    *string `json:"location"`
	Title       *string `json:"title"`
}
