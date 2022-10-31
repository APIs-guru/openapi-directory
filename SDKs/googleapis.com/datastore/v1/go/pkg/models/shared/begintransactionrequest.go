package shared

type BeginTransactionRequest struct {
	DatabaseID         *string             `json:"databaseId,omitempty"`
	TransactionOptions *TransactionOptions `json:"transactionOptions,omitempty"`
}
