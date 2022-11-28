package shared

// GoogleCloudDialogflowV2beta1ReloadDocumentRequest
// Request message for Documents.ReloadDocument.
type GoogleCloudDialogflowV2beta1ReloadDocumentRequest struct {
	GcsSource               *GoogleCloudDialogflowV2beta1GcsSource `json:"gcsSource,omitempty"`
	ImportGcsCustomMetadata *bool                                  `json:"importGcsCustomMetadata,omitempty"`
}
