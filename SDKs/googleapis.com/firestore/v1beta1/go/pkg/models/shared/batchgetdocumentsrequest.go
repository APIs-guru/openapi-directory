package shared

// BatchGetDocumentsRequest
// The request for Firestore.BatchGetDocuments.
type BatchGetDocumentsRequest struct {
	Documents      []string            `json:"documents,omitempty"`
	Mask           *DocumentMask       `json:"mask,omitempty"`
	NewTransaction *TransactionOptions `json:"newTransaction,omitempty"`
	ReadTime       *string             `json:"readTime,omitempty"`
	Transaction    *string             `json:"transaction,omitempty"`
}
