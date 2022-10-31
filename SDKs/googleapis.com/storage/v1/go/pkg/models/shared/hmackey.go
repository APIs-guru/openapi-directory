package shared



type HmacKey struct {
    Kind *string `json:"kind,omitempty"`
    Metadata *HmacKeyMetadata `json:"metadata,omitempty"`
    Secret *string `json:"secret,omitempty"`
    
}

