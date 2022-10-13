package shared

type RollbackRequest struct {
	Transaction *string `json:"transaction"`
}
