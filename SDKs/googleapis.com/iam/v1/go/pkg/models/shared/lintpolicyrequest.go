package shared

// LintPolicyRequest
// The request to lint a Cloud IAM policy object.
type LintPolicyRequest struct {
	Condition        *Expr   `json:"condition,omitempty"`
	FullResourceName *string `json:"fullResourceName,omitempty"`
}
