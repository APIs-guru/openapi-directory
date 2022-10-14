package shared

type CommitRequest struct {
	Transaction *string `json:"transaction,omitempty"`
	Writes      []Write `json:"writes,omitempty"`
}
