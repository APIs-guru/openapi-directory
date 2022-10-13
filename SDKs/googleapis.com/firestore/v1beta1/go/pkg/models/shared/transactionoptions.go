package shared

type TransactionOptions struct {
	ReadOnly  *ReadOnly  `json:"readOnly"`
	ReadWrite *ReadWrite `json:"readWrite"`
}
