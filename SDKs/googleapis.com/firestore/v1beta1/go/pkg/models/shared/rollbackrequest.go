package shared

// RollbackRequest
// The request for Firestore.Rollback.
type RollbackRequest struct {
	Transaction *string `json:"transaction,omitempty"`
}
