package shared

type GoogleCloudDialogflowV2BatchUpdateEntitiesRequest struct {
	Entities     []GoogleCloudDialogflowV2EntityTypeEntity `json:"entities"`
	LanguageCode *string                                   `json:"languageCode"`
	UpdateMask   *string                                   `json:"updateMask"`
}
