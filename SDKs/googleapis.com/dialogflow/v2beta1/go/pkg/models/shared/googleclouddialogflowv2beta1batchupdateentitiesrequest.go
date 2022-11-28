package shared

// GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest
// The request message for EntityTypes.BatchUpdateEntities.
type GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest struct {
	Entities     []GoogleCloudDialogflowV2beta1EntityTypeEntity `json:"entities,omitempty"`
	LanguageCode *string                                        `json:"languageCode,omitempty"`
	UpdateMask   *string                                        `json:"updateMask,omitempty"`
}
