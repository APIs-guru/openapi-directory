package shared

type LintPolicyRequest struct {
	Condition        *Expr   `json:"condition"`
	FullResourceName *string `json:"fullResourceName"`
}
