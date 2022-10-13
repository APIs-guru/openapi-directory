package shared

type TranslateDocumentRequest struct {
	CustomizedAttribution *string                      `json:"customizedAttribution"`
	DocumentInputConfig   *DocumentInputConfig         `json:"documentInputConfig"`
	DocumentOutputConfig  *DocumentOutputConfig        `json:"documentOutputConfig"`
	GlossaryConfig        *TranslateTextGlossaryConfig `json:"glossaryConfig"`
	Labels                map[string]string            `json:"labels"`
	Model                 *string                      `json:"model"`
	SourceLanguageCode    *string                      `json:"sourceLanguageCode"`
	TargetLanguageCode    *string                      `json:"targetLanguageCode"`
}
