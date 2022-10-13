package shared

type RollbackRequest struct {
	DatabaseID  *string `json:"databaseId"`
	Transaction *string `json:"transaction"`
}
