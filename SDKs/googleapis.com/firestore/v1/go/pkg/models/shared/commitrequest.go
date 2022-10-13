package shared

type CommitRequest struct {
	Transaction *string `json:"transaction"`
	Writes      []Write `json:"writes"`
}
