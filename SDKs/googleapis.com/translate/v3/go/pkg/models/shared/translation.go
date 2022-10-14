package shared

type Translation struct {
	DetectedLanguageCode *string                      `json:"detectedLanguageCode,omitempty"`
	GlossaryConfig       *TranslateTextGlossaryConfig `json:"glossaryConfig,omitempty"`
	Model                *string                      `json:"model,omitempty"`
	TranslatedText       *string                      `json:"translatedText,omitempty"`
}
