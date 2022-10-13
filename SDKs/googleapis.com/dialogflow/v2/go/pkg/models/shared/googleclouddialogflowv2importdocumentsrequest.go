package shared

type GoogleCloudDialogflowV2ImportDocumentsRequest struct {
	DocumentTemplate        *GoogleCloudDialogflowV2ImportDocumentTemplate `json:"documentTemplate"`
	GcsSource               *GoogleCloudDialogflowV2GcsSources             `json:"gcsSource"`
	ImportGcsCustomMetadata *bool                                          `json:"importGcsCustomMetadata"`
}
