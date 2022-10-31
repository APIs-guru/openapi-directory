package shared

type BeginTransactionRequest struct {
	Options *TransactionOptions `json:"options,omitempty"`
}
