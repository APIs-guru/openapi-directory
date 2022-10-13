package shared

type Binding struct {
	BindingID *string  `json:"bindingId"`
	Condition *Expr    `json:"condition"`
	Members   []string `json:"members"`
	Role      *string  `json:"role"`
}
