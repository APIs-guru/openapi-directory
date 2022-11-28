package shared

// BatchGetDocumentsResponse
// The streamed response for Firestore.BatchGetDocuments.
type BatchGetDocumentsResponse struct {
	Found       *Document `json:"found,omitempty"`
	Missing     *string   `json:"missing,omitempty"`
	ReadTime    *string   `json:"readTime,omitempty"`
	Transaction *string   `json:"transaction,omitempty"`
}
