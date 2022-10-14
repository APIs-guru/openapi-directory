package shared

type GoogleCloudVideointelligenceV1TextDetectionConfig struct {
	LanguageHints []string `json:"languageHints,omitempty"`
	Model         *string  `json:"model,omitempty"`
}
