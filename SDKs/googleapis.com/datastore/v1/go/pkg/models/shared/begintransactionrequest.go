package shared

type BeginTransactionRequest struct {
	DatabaseID         *string             `json:"databaseId"`
	TransactionOptions *TransactionOptions `json:"transactionOptions"`
}
