package shared

type GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest struct {
	EntityTypeBatchInline *GoogleCloudDialogflowV2beta1EntityTypeBatch `json:"entityTypeBatchInline,omitempty"`
	EntityTypeBatchURI    *string                                      `json:"entityTypeBatchUri,omitempty"`
	LanguageCode          *string                                      `json:"languageCode,omitempty"`
	UpdateMask            *string                                      `json:"updateMask,omitempty"`
}
