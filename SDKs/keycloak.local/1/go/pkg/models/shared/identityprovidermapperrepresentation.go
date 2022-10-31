package shared



type IdentityProviderMapperRepresentation struct {
    Config map[string]interface{} `json:"config,omitempty"`
    ID *string `json:"id,omitempty"`
    IdentityProviderAlias *string `json:"identityProviderAlias,omitempty"`
    IdentityProviderMapper *string `json:"identityProviderMapper,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

