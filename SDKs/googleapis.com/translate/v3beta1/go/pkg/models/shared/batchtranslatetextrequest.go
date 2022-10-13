package shared

type BatchTranslateTextRequest struct {
	Glossaries          map[string]TranslateTextGlossaryConfig `json:"glossaries"`
	InputConfigs        []InputConfig                          `json:"inputConfigs"`
	Labels              map[string]string                      `json:"labels"`
	Models              map[string]string                      `json:"models"`
	OutputConfig        *OutputConfig                          `json:"outputConfig"`
	SourceLanguageCode  *string                                `json:"sourceLanguageCode"`
	TargetLanguageCodes []string                               `json:"targetLanguageCodes"`
}
