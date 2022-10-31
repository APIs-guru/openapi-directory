package shared



type GqlQuery struct {
    AllowLiterals *bool `json:"allowLiterals,omitempty"`
    NamedBindings map[string]GqlQueryParameter `json:"namedBindings,omitempty"`
    PositionalBindings []GqlQueryParameter `json:"positionalBindings,omitempty"`
    QueryString *string `json:"queryString,omitempty"`
    
}

