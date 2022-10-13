package shared

type TextProperty struct {
	DetectedBreak     *DetectedBreak     `json:"detectedBreak"`
	DetectedLanguages []DetectedLanguage `json:"detectedLanguages"`
}
