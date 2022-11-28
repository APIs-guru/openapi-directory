package shared

// RollbackRequest
// The request for Datastore.Rollback.
type RollbackRequest struct {
	DatabaseID  *string `json:"databaseId,omitempty"`
	Transaction *string `json:"transaction,omitempty"`
}
