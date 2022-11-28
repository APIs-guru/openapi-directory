package shared

// GoogleCloudDialogflowV2ListDocumentsResponse
// Response message for Documents.ListDocuments.
type GoogleCloudDialogflowV2ListDocumentsResponse struct {
	Documents     []GoogleCloudDialogflowV2Document `json:"documents,omitempty"`
	NextPageToken *string                           `json:"nextPageToken,omitempty"`
}
