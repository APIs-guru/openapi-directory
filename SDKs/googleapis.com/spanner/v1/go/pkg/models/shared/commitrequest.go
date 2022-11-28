package shared

// CommitRequest
// The request for Commit.
type CommitRequest struct {
	Mutations            []Mutation          `json:"mutations,omitempty"`
	RequestOptions       *RequestOptions     `json:"requestOptions,omitempty"`
	ReturnCommitStats    *bool               `json:"returnCommitStats,omitempty"`
	SingleUseTransaction *TransactionOptions `json:"singleUseTransaction,omitempty"`
	TransactionID        *string             `json:"transactionId,omitempty"`
}
