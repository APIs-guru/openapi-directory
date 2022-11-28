package shared

// ExecuteBatchDmlRequest
// The request for ExecuteBatchDml.
type ExecuteBatchDmlRequest struct {
	RequestOptions *RequestOptions      `json:"requestOptions,omitempty"`
	Seqno          *string              `json:"seqno,omitempty"`
	Statements     []Statement          `json:"statements,omitempty"`
	Transaction    *TransactionSelector `json:"transaction,omitempty"`
}
