package shared



type GoogleCloudHealthcareV1ConsentPolicy struct {
    AuthorizationRule *Expr `json:"authorizationRule,omitempty"`
    ResourceAttributes []Attribute `json:"resourceAttributes,omitempty"`
    
}

