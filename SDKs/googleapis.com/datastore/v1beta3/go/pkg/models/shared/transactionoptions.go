package shared

// TransactionOptions
// Options for beginning a new transaction. Transactions can be created explicitly with calls to Datastore.BeginTransaction or implicitly by setting ReadOptions.new_transaction in read requests.
type TransactionOptions struct {
	ReadOnly  *ReadOnly  `json:"readOnly,omitempty"`
	ReadWrite *ReadWrite `json:"readWrite,omitempty"`
}
