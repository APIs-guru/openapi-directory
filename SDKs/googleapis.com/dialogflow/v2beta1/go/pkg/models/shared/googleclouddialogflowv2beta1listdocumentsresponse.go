package shared

// GoogleCloudDialogflowV2beta1ListDocumentsResponse
// Response message for Documents.ListDocuments.
type GoogleCloudDialogflowV2beta1ListDocumentsResponse struct {
	Documents     []GoogleCloudDialogflowV2beta1Document `json:"documents,omitempty"`
	NextPageToken *string                                `json:"nextPageToken,omitempty"`
}
