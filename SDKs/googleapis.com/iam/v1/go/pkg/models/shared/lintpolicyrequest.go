package shared



type LintPolicyRequest struct {
    Condition *Expr `json:"condition,omitempty"`
    FullResourceName *string `json:"fullResourceName,omitempty"`
    
}

