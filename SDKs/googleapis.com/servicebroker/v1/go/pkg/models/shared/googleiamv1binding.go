package shared



type GoogleIamV1Binding struct {
    Condition *GoogleTypeExpr `json:"condition,omitempty"`
    Members []string `json:"members,omitempty"`
    Role *string `json:"role,omitempty"`
    
}

