package shared

// TransactionOptions
// Options for creating a new transaction.
type TransactionOptions struct {
	ReadOnly  *ReadOnly  `json:"readOnly,omitempty"`
	ReadWrite *ReadWrite `json:"readWrite,omitempty"`
}
