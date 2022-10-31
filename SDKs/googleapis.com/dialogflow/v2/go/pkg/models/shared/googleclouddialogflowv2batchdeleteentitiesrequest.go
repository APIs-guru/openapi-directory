package shared

type GoogleCloudDialogflowV2BatchDeleteEntitiesRequest struct {
	EntityValues []string `json:"entityValues,omitempty"`
	LanguageCode *string  `json:"languageCode,omitempty"`
}
