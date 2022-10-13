package shared

type GoogleCloudDialogflowV2BatchCreateEntitiesRequest struct {
	Entities     []GoogleCloudDialogflowV2EntityTypeEntity `json:"entities"`
	LanguageCode *string                                   `json:"languageCode"`
}
