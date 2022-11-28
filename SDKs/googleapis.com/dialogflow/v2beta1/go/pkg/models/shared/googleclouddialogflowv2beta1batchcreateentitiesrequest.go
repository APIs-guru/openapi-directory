package shared

// GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest
// The request message for EntityTypes.BatchCreateEntities.
type GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest struct {
	Entities     []GoogleCloudDialogflowV2beta1EntityTypeEntity `json:"entities,omitempty"`
	LanguageCode *string                                        `json:"languageCode,omitempty"`
}
