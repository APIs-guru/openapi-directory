package shared

type GoogleCloudDialogflowV2BatchDeleteEntitiesRequest struct {
	EntityValues []string `json:"entityValues"`
	LanguageCode *string  `json:"languageCode"`
}
