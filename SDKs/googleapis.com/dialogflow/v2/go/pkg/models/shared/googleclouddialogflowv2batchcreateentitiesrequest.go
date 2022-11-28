package shared

// GoogleCloudDialogflowV2BatchCreateEntitiesRequest
// The request message for EntityTypes.BatchCreateEntities.
type GoogleCloudDialogflowV2BatchCreateEntitiesRequest struct {
	Entities     []GoogleCloudDialogflowV2EntityTypeEntity `json:"entities,omitempty"`
	LanguageCode *string                                   `json:"languageCode,omitempty"`
}
