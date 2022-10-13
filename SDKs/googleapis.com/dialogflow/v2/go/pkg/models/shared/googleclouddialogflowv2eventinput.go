package shared

type GoogleCloudDialogflowV2EventInput struct {
	LanguageCode *string                `json:"languageCode"`
	Name         *string                `json:"name"`
	Parameters   map[string]interface{} `json:"parameters"`
}
