package shared

type TransactionOptions struct {
	ReadOnly  *ReadOnly  `json:"readOnly,omitempty"`
	ReadWrite *ReadWrite `json:"readWrite,omitempty"`
}
