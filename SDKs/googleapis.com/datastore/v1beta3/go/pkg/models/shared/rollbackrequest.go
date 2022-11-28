package shared

// RollbackRequest
// The request for Datastore.Rollback.
type RollbackRequest struct {
	Transaction *string `json:"transaction,omitempty"`
}
