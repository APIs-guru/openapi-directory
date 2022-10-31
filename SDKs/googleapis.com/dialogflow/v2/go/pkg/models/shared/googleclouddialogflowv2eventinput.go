package shared

type GoogleCloudDialogflowV2EventInput struct {
	LanguageCode *string                `json:"languageCode,omitempty"`
	Name         *string                `json:"name,omitempty"`
	Parameters   map[string]interface{} `json:"parameters,omitempty"`
}
