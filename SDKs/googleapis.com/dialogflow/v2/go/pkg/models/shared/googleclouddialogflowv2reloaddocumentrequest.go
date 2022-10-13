package shared

type GoogleCloudDialogflowV2ReloadDocumentRequest struct {
	ContentURI                  *string `json:"contentUri"`
	ImportGcsCustomMetadata     *bool   `json:"importGcsCustomMetadata"`
	SmartMessagingPartialUpdate *bool   `json:"smartMessagingPartialUpdate"`
}
