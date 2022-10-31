package shared



type AdminEventRepresentation struct {
    AuthDetails *AuthDetailsRepresentation `json:"authDetails,omitempty"`
    Error *string `json:"error,omitempty"`
    OperationType *string `json:"operationType,omitempty"`
    RealmID *string `json:"realmId,omitempty"`
    Representation *string `json:"representation,omitempty"`
    ResourcePath *string `json:"resourcePath,omitempty"`
    ResourceType *string `json:"resourceType,omitempty"`
    Time *int64 `json:"time,omitempty"`
    
}

