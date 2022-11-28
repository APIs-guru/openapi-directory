package shared

// ReadWrite
// Options for a transaction that can be used to read and write documents.
type ReadWrite struct {
	RetryTransaction *string `json:"retryTransaction,omitempty"`
}
