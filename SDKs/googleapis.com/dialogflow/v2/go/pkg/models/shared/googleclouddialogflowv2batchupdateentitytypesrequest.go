package shared

type GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest struct {
	EntityTypeBatchInline *GoogleCloudDialogflowV2EntityTypeBatch `json:"entityTypeBatchInline,omitempty"`
	EntityTypeBatchURI    *string                                 `json:"entityTypeBatchUri,omitempty"`
	LanguageCode          *string                                 `json:"languageCode,omitempty"`
	UpdateMask            *string                                 `json:"updateMask,omitempty"`
}
