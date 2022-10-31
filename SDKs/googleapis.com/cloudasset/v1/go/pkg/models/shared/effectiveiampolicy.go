package shared



type EffectiveIamPolicy struct {
    FullResourceName *string `json:"fullResourceName,omitempty"`
    Policies []PolicyInfo `json:"policies,omitempty"`
    
}

