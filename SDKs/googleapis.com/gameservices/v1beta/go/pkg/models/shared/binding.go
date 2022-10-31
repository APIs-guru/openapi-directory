package shared



type Binding struct {
    BindingID *string `json:"bindingId,omitempty"`
    Condition *Expr `json:"condition,omitempty"`
    Members []string `json:"members,omitempty"`
    Role *string `json:"role,omitempty"`
    
}

