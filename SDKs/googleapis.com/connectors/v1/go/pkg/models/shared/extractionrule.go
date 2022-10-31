package shared



type ExtractionRule struct {
    ExtractionRegex *string `json:"extractionRegex,omitempty"`
    Source *Source `json:"source,omitempty"`
    
}

