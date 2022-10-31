package shared

type BatchTranslateTextRequest struct {
	Glossaries          map[string]TranslateTextGlossaryConfig `json:"glossaries,omitempty"`
	InputConfigs        []InputConfig                          `json:"inputConfigs,omitempty"`
	Labels              map[string]string                      `json:"labels,omitempty"`
	Models              map[string]string                      `json:"models,omitempty"`
	OutputConfig        *OutputConfig                          `json:"outputConfig,omitempty"`
	SourceLanguageCode  *string                                `json:"sourceLanguageCode,omitempty"`
	TargetLanguageCodes []string                               `json:"targetLanguageCodes,omitempty"`
}
