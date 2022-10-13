package shared

type BatchTranslateDocumentRequest struct {
	FormatConversions   map[string]string                      `json:"formatConversions"`
	Glossaries          map[string]TranslateTextGlossaryConfig `json:"glossaries"`
	InputConfigs        []BatchDocumentInputConfig             `json:"inputConfigs"`
	Models              map[string]string                      `json:"models"`
	OutputConfig        *BatchDocumentOutputConfig             `json:"outputConfig"`
	SourceLanguageCode  *string                                `json:"sourceLanguageCode"`
	TargetLanguageCodes []string                               `json:"targetLanguageCodes"`
}
