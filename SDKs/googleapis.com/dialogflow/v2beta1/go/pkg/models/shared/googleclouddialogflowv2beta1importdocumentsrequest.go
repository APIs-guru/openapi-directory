package shared

type GoogleCloudDialogflowV2beta1ImportDocumentsRequest struct {
	DocumentTemplate        *GoogleCloudDialogflowV2beta1ImportDocumentTemplate `json:"documentTemplate"`
	GcsSource               *GoogleCloudDialogflowV2beta1GcsSources             `json:"gcsSource"`
	ImportGcsCustomMetadata *bool                                               `json:"importGcsCustomMetadata"`
}
