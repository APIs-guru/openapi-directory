package shared

// BeginTransactionRequest
// The request for Firestore.BeginTransaction.
type BeginTransactionRequest struct {
	Options *TransactionOptions `json:"options,omitempty"`
}
