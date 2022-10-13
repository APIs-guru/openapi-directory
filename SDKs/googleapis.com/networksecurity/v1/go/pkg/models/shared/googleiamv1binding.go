package shared

type GoogleIamV1Binding struct {
	Condition *Expr    `json:"condition"`
	Members   []string `json:"members"`
	Role      *string  `json:"role"`
}
