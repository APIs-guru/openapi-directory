package operations

type DeleteTransactionsTransactionIDPathParams struct {
	TransactionID string `pathParam:"style=simple,explode=false,name=transactionId"`
}

type DeleteTransactionsTransactionIDRequest struct {
	PathParams DeleteTransactionsTransactionIDPathParams
}

type DeleteTransactionsTransactionIDResponse struct {
	ContentType string
	StatusCode  int64
}
