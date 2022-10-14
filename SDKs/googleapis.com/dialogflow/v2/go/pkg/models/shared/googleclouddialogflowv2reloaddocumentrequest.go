package shared

type GoogleCloudDialogflowV2ReloadDocumentRequest struct {
	ContentURI                  *string `json:"contentUri,omitempty"`
	ImportGcsCustomMetadata     *bool   `json:"importGcsCustomMetadata,omitempty"`
	SmartMessagingPartialUpdate *bool   `json:"smartMessagingPartialUpdate,omitempty"`
}
