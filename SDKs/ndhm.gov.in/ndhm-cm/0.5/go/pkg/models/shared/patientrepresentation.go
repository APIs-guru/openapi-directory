package shared



type PatientRepresentation struct {
    CareContexts []CareContextRepresentation `json:"careContexts"`
    Display string `json:"display"`
    MatchedBy []IdentifierTypeEnum `json:"matchedBy,omitempty"`
    ReferenceNumber string `json:"referenceNumber"`
    
}

