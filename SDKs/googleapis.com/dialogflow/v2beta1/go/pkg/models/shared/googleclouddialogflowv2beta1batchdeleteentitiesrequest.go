package shared

// GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest
// The request message for EntityTypes.BatchDeleteEntities.
type GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest struct {
	EntityValues []string `json:"entityValues,omitempty"`
	LanguageCode *string  `json:"languageCode,omitempty"`
}
