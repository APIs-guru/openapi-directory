package shared

type GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest struct {
	EntityValues []string `json:"entityValues"`
	LanguageCode *string  `json:"languageCode"`
}
