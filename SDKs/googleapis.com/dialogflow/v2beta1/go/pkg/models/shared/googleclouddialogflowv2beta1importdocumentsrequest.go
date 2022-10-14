package shared

type GoogleCloudDialogflowV2beta1ImportDocumentsRequest struct {
	DocumentTemplate        *GoogleCloudDialogflowV2beta1ImportDocumentTemplate `json:"documentTemplate,omitempty"`
	GcsSource               *GoogleCloudDialogflowV2beta1GcsSources             `json:"gcsSource,omitempty"`
	ImportGcsCustomMetadata *bool                                               `json:"importGcsCustomMetadata,omitempty"`
}
