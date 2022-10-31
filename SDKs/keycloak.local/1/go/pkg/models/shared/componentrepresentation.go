package shared



type ComponentRepresentation struct {
    Config *MultivaluedHashMap `json:"config,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    ParentID *string `json:"parentId,omitempty"`
    ProviderID *string `json:"providerId,omitempty"`
    ProviderType *string `json:"providerType,omitempty"`
    SubType *string `json:"subType,omitempty"`
    
}

