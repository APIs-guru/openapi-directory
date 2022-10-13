package shared

type GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest struct {
	EntityTypeBatchInline *GoogleCloudDialogflowV2EntityTypeBatch `json:"entityTypeBatchInline"`
	EntityTypeBatchURI    *string                                 `json:"entityTypeBatchUri"`
	LanguageCode          *string                                 `json:"languageCode"`
	UpdateMask            *string                                 `json:"updateMask"`
}
