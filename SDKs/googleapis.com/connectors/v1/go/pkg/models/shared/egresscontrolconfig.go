package shared



type EgressControlConfig struct {
    Backends *string `json:"backends,omitempty"`
    ExtractionRules *ExtractionRules `json:"extractionRules,omitempty"`
    
}

