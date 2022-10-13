package shared

type BeginTransactionRequest struct {
	Options        *TransactionOptions `json:"options"`
	RequestOptions *RequestOptions     `json:"requestOptions"`
}
