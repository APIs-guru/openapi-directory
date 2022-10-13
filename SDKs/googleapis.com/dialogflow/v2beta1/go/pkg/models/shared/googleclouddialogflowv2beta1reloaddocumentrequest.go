package shared

type GoogleCloudDialogflowV2beta1ReloadDocumentRequest struct {
	GcsSource               *GoogleCloudDialogflowV2beta1GcsSource `json:"gcsSource"`
	ImportGcsCustomMetadata *bool                                  `json:"importGcsCustomMetadata"`
}
