package shared

type CommitRequest struct {
	Mutations            []Mutation          `json:"mutations"`
	RequestOptions       *RequestOptions     `json:"requestOptions"`
	ReturnCommitStats    *bool               `json:"returnCommitStats"`
	SingleUseTransaction *TransactionOptions `json:"singleUseTransaction"`
	TransactionID        *string             `json:"transactionId"`
}
