package shared

// GoogleCloudDialogflowV2BatchDeleteEntitiesRequest
// The request message for EntityTypes.BatchDeleteEntities.
type GoogleCloudDialogflowV2BatchDeleteEntitiesRequest struct {
	EntityValues []string `json:"entityValues,omitempty"`
	LanguageCode *string  `json:"languageCode,omitempty"`
}
