package shared



type EnrichmentRequest struct {
    Aspect *string `json:"aspect,omitempty"`
    Genes []string `json:"genes,omitempty"`
    Species *string `json:"species,omitempty"`
    
}

