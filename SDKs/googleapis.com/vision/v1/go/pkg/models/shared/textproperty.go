package shared

// TextProperty
// Additional information detected on the structural component.
type TextProperty struct {
	DetectedBreak     *DetectedBreak     `json:"detectedBreak,omitempty"`
	DetectedLanguages []DetectedLanguage `json:"detectedLanguages,omitempty"`
}
