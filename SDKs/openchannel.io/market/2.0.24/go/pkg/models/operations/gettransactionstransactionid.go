package operations

type GetTransactionsTransactionIDPathParams struct {
	TransactionID string `pathParam:"style=simple,explode=false,name=transactionId"`
}

type GetTransactionsTransactionIDRequest struct {
	PathParams GetTransactionsTransactionIDPathParams
}

type GetTransactionsTransactionIDResponse struct {
	ContentType string
	StatusCode  int64
}
