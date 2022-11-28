package shared

// BeginTransactionResponse
// The response for Firestore.BeginTransaction.
type BeginTransactionResponse struct {
	Transaction *string `json:"transaction,omitempty"`
}
