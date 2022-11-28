package shared

// BatchTranslateDocumentRequest
// The BatchTranslateDocument request.
type BatchTranslateDocumentRequest struct {
	FormatConversions   map[string]string                      `json:"formatConversions,omitempty"`
	Glossaries          map[string]TranslateTextGlossaryConfig `json:"glossaries,omitempty"`
	InputConfigs        []BatchDocumentInputConfig             `json:"inputConfigs,omitempty"`
	Models              map[string]string                      `json:"models,omitempty"`
	OutputConfig        *BatchDocumentOutputConfig             `json:"outputConfig,omitempty"`
	SourceLanguageCode  *string                                `json:"sourceLanguageCode,omitempty"`
	TargetLanguageCodes []string                               `json:"targetLanguageCodes,omitempty"`
}
