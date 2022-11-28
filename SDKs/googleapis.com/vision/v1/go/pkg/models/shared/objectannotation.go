package shared

// ObjectAnnotation
// Prediction for what the object in the bounding box is.
type ObjectAnnotation struct {
	LanguageCode *string  `json:"languageCode,omitempty"`
	Mid          *string  `json:"mid,omitempty"`
	Name         *string  `json:"name,omitempty"`
	Score        *float32 `json:"score,omitempty"`
}
