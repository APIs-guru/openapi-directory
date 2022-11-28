package shared

// BeginTransactionResponse
// The response for Datastore.BeginTransaction.
type BeginTransactionResponse struct {
	Transaction *string `json:"transaction,omitempty"`
}
