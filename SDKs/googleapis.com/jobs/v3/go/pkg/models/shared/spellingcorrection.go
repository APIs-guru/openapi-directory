package shared



type SpellingCorrection struct {
    Corrected *bool `json:"corrected,omitempty"`
    CorrectedText *string `json:"correctedText,omitempty"`
    
}

