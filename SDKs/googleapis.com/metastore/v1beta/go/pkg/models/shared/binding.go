package shared

// Binding
// Associates members, or principals, with a role.
type Binding struct {
	Condition *Expr    `json:"condition,omitempty"`
	Members   []string `json:"members,omitempty"`
	Role      *string  `json:"role,omitempty"`
}
