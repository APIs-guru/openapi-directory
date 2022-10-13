package shared

type ExecuteBatchDmlRequest struct {
	RequestOptions *RequestOptions      `json:"requestOptions"`
	Seqno          *string              `json:"seqno"`
	Statements     []Statement          `json:"statements"`
	Transaction    *TransactionSelector `json:"transaction"`
}
