package shared

// BeginTransactionRequest
// The request for Datastore.BeginTransaction.
type BeginTransactionRequest struct {
	TransactionOptions *TransactionOptions `json:"transactionOptions,omitempty"`
}
