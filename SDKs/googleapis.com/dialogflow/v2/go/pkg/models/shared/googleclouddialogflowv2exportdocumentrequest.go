package shared

type GoogleCloudDialogflowV2ExportDocumentRequest struct {
	ExportFullContent           *bool                                  `json:"exportFullContent"`
	GcsDestination              *GoogleCloudDialogflowV2GcsDestination `json:"gcsDestination"`
	SmartMessagingPartialUpdate *bool                                  `json:"smartMessagingPartialUpdate"`
}
