package shared

// ReadWrite
// Options specific to read / write transactions.
type ReadWrite struct {
	PreviousTransaction *string `json:"previousTransaction,omitempty"`
}
