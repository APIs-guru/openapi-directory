package operations

type PostTransactionsTransactionIDPathParams struct {
	TransactionID string `pathParam:"style=simple,explode=false,name=transactionId"`
}

type PostTransactionsTransactionIDQueryParams struct {
	CustomData *string `queryParam:"style=form,explode=true,name=customData"`
}

type PostTransactionsTransactionIDRequest struct {
	PathParams  PostTransactionsTransactionIDPathParams
	QueryParams PostTransactionsTransactionIDQueryParams
}

type PostTransactionsTransactionIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
