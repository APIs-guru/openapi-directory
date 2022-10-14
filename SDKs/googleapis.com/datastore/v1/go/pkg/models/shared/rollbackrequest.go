package shared

type RollbackRequest struct {
	DatabaseID  *string `json:"databaseId,omitempty"`
	Transaction *string `json:"transaction,omitempty"`
}
