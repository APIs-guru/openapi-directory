package shared

type TranslateDocumentRequest struct {
	CustomizedAttribution *string                      `json:"customizedAttribution,omitempty"`
	DocumentInputConfig   *DocumentInputConfig         `json:"documentInputConfig,omitempty"`
	DocumentOutputConfig  *DocumentOutputConfig        `json:"documentOutputConfig,omitempty"`
	GlossaryConfig        *TranslateTextGlossaryConfig `json:"glossaryConfig,omitempty"`
	Labels                map[string]string            `json:"labels,omitempty"`
	Model                 *string                      `json:"model,omitempty"`
	SourceLanguageCode    *string                      `json:"sourceLanguageCode,omitempty"`
	TargetLanguageCode    *string                      `json:"targetLanguageCode,omitempty"`
}
