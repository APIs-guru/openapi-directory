package shared



type LocalizedObjectAnnotation struct {
    BoundingPoly *BoundingPoly `json:"boundingPoly,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    Mid *string `json:"mid,omitempty"`
    Name *string `json:"name,omitempty"`
    Score *float32 `json:"score,omitempty"`
    
}

