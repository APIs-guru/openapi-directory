package shared



type TextProperty struct {
    DetectedBreak *DetectedBreak `json:"detectedBreak,omitempty"`
    DetectedLanguages []DetectedLanguage `json:"detectedLanguages,omitempty"`
    
}

