package shared

type BeginTransactionRequest struct {
	TransactionOptions *TransactionOptions `json:"transactionOptions,omitempty"`
}
