package shared

type BatchGetDocumentsRequest struct {
	Documents      []string            `json:"documents"`
	Mask           *DocumentMask       `json:"mask"`
	NewTransaction *TransactionOptions `json:"newTransaction"`
	ReadTime       *string             `json:"readTime"`
	Transaction    *string             `json:"transaction"`
}
