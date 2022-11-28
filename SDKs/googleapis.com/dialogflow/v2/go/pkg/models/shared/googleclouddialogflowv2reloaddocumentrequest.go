package shared

// GoogleCloudDialogflowV2ReloadDocumentRequest
// Request message for Documents.ReloadDocument.
type GoogleCloudDialogflowV2ReloadDocumentRequest struct {
	ContentURI                  *string `json:"contentUri,omitempty"`
	ImportGcsCustomMetadata     *bool   `json:"importGcsCustomMetadata,omitempty"`
	SmartMessagingPartialUpdate *bool   `json:"smartMessagingPartialUpdate,omitempty"`
}
