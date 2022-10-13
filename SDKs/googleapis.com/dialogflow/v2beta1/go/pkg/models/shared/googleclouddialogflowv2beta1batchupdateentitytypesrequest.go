package shared

type GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest struct {
	EntityTypeBatchInline *GoogleCloudDialogflowV2beta1EntityTypeBatch `json:"entityTypeBatchInline"`
	EntityTypeBatchURI    *string                                      `json:"entityTypeBatchUri"`
	LanguageCode          *string                                      `json:"languageCode"`
	UpdateMask            *string                                      `json:"updateMask"`
}
