package shared

// GoogleCloudVideointelligenceV1TextDetectionConfig
// Config for TEXT_DETECTION.
type GoogleCloudVideointelligenceV1TextDetectionConfig struct {
	LanguageHints []string `json:"languageHints,omitempty"`
	Model         *string  `json:"model,omitempty"`
}
