package shared



type TextDetectionParams struct {
    AdvancedOcrOptions []string `json:"advancedOcrOptions,omitempty"`
    EnableTextDetectionConfidenceScore *bool `json:"enableTextDetectionConfidenceScore,omitempty"`
    
}

