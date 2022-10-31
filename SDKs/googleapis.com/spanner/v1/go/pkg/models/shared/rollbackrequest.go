package shared

type RollbackRequest struct {
	TransactionID *string `json:"transactionId,omitempty"`
}
