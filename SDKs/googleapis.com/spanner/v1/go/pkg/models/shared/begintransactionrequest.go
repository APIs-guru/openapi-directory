package shared

// BeginTransactionRequest
// The request for BeginTransaction.
type BeginTransactionRequest struct {
	Options        *TransactionOptions `json:"options,omitempty"`
	RequestOptions *RequestOptions     `json:"requestOptions,omitempty"`
}
