package shared

// BeginTransactionRequest
// The request for Datastore.BeginTransaction.
type BeginTransactionRequest struct {
	DatabaseID         *string             `json:"databaseId,omitempty"`
	TransactionOptions *TransactionOptions `json:"transactionOptions,omitempty"`
}
