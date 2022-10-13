package shared

type GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest struct {
	Entities     []GoogleCloudDialogflowV2beta1EntityTypeEntity `json:"entities"`
	LanguageCode *string                                        `json:"languageCode"`
	UpdateMask   *string                                        `json:"updateMask"`
}
