package shared



type Features struct {
    ExtractDocumentSentiment *bool `json:"extractDocumentSentiment,omitempty"`
    ExtractEntities *bool `json:"extractEntities,omitempty"`
    ExtractSyntax *bool `json:"extractSyntax,omitempty"`
    
}

