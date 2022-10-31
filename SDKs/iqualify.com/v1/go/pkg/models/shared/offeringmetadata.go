package shared



type OfferingMetadata struct {
    Category *string `json:"category,omitempty"`
    Level *string `json:"level,omitempty"`
    RootContentID *string `json:"rootContentId,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Topic *string `json:"topic,omitempty"`
    
}

