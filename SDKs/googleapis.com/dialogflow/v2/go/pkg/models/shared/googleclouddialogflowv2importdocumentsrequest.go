package shared

// GoogleCloudDialogflowV2ImportDocumentsRequest
// Request message for Documents.ImportDocuments.
type GoogleCloudDialogflowV2ImportDocumentsRequest struct {
	DocumentTemplate        *GoogleCloudDialogflowV2ImportDocumentTemplate `json:"documentTemplate,omitempty"`
	GcsSource               *GoogleCloudDialogflowV2GcsSources             `json:"gcsSource,omitempty"`
	ImportGcsCustomMetadata *bool                                          `json:"importGcsCustomMetadata,omitempty"`
}
