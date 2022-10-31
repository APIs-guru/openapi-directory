package shared

type Expr struct {
	Description *string `json:"description,omitempty"`
	Expression  *string `json:"expression,omitempty"`
	Location    *string `json:"location,omitempty"`
	Title       *string `json:"title,omitempty"`
}
