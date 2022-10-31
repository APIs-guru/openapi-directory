package shared



type UserFederationMapperRepresentation struct {
    Config map[string]interface{} `json:"config,omitempty"`
    FederationMapperType *string `json:"federationMapperType,omitempty"`
    FederationProviderDisplayName *string `json:"federationProviderDisplayName,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

