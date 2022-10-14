package shared

type GoogleCloudDialogflowV2BatchUpdateEntitiesRequest struct {
	Entities     []GoogleCloudDialogflowV2EntityTypeEntity `json:"entities,omitempty"`
	LanguageCode *string                                   `json:"languageCode,omitempty"`
	UpdateMask   *string                                   `json:"updateMask,omitempty"`
}
