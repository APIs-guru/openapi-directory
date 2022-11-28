package shared

// GoogleCloudDialogflowV2ExportDocumentRequest
// Request message for Documents.ExportDocument.
type GoogleCloudDialogflowV2ExportDocumentRequest struct {
	ExportFullContent           *bool                                  `json:"exportFullContent,omitempty"`
	GcsDestination              *GoogleCloudDialogflowV2GcsDestination `json:"gcsDestination,omitempty"`
	SmartMessagingPartialUpdate *bool                                  `json:"smartMessagingPartialUpdate,omitempty"`
}
