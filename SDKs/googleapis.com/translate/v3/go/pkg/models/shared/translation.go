package shared

type Translation struct {
	DetectedLanguageCode *string                      `json:"detectedLanguageCode"`
	GlossaryConfig       *TranslateTextGlossaryConfig `json:"glossaryConfig"`
	Model                *string                      `json:"model"`
	TranslatedText       *string                      `json:"translatedText"`
}
