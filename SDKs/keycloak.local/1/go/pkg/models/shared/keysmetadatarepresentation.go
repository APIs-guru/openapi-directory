package shared



type KeysMetadataRepresentation struct {
    Active map[string]interface{} `json:"active,omitempty"`
    Keys []KeysMetadataRepresentationKeyMetadataRepresentation `json:"keys,omitempty"`
    
}

