package shared

// Transaction
// A transaction.
type Transaction struct {
	ID            *string `json:"id,omitempty"`
	ReadTimestamp *string `json:"readTimestamp,omitempty"`
}
