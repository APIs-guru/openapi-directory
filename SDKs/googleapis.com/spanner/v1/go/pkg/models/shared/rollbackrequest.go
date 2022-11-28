package shared

// RollbackRequest
// The request for Rollback.
type RollbackRequest struct {
	TransactionID *string `json:"transactionId,omitempty"`
}
