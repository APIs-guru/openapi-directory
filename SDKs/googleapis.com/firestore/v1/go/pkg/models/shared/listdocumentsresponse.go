package shared

// ListDocumentsResponse
// The response for Firestore.ListDocuments.
type ListDocumentsResponse struct {
	Documents     []Document `json:"documents,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
