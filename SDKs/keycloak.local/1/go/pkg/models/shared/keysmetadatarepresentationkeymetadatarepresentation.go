package shared



type KeysMetadataRepresentationKeyMetadataRepresentation struct {
    Algorithm *string `json:"algorithm,omitempty"`
    Certificate *string `json:"certificate,omitempty"`
    Kid *string `json:"kid,omitempty"`
    ProviderID *string `json:"providerId,omitempty"`
    ProviderPriority *int64 `json:"providerPriority,omitempty"`
    PublicKey *string `json:"publicKey,omitempty"`
    Status *string `json:"status,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

