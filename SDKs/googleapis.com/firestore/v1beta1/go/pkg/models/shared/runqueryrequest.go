package shared

// RunQueryRequest
// The request for Firestore.RunQuery.
type RunQueryRequest struct {
	NewTransaction  *TransactionOptions `json:"newTransaction,omitempty"`
	ReadTime        *string             `json:"readTime,omitempty"`
	StructuredQuery *StructuredQuery    `json:"structuredQuery,omitempty"`
	Transaction     *string             `json:"transaction,omitempty"`
}
