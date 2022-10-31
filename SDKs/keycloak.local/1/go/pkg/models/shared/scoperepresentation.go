package shared



type ScopeRepresentation struct {
    DisplayName *string `json:"displayName,omitempty"`
    IconURI *string `json:"iconUri,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Policies []PolicyRepresentation `json:"policies,omitempty"`
    Resources []ResourceRepresentation `json:"resources,omitempty"`
    
}

