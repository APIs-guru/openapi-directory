package operations

type GetABatchOfBusinessTransactionClassificationResultsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetABatchOfBusinessTransactionClassificationResultsRequest struct {
	PathParams GetABatchOfBusinessTransactionClassificationResultsPathParams
}

type GetABatchOfBusinessTransactionClassificationResults200ApplicationJSONResults struct {
	Labels        []string `json:"labels"`
	Logo          *string  `json:"logo"`
	Merchant      *string  `json:"merchant"`
	TransactionID *string  `json:"transaction_id"`
	Website       *string  `json:"website"`
}

type GetABatchOfBusinessTransactionClassificationResults200ApplicationJSON struct {
	ID        *string                                                                        `json:"id"`
	Progress  *float64                                                                       `json:"progress"`
	Results   []GetABatchOfBusinessTransactionClassificationResults200ApplicationJSONResults `json:"results"`
	Status    *string                                                                        `json:"status"`
	UpdatedAt *string                                                                        `json:"updated_at"`
}

type GetABatchOfBusinessTransactionClassificationResultsResponse struct {
	ContentType                                                                 string
	StatusCode                                                                  int64
	GetABatchOfBusinessTransactionClassificationResults200ApplicationJSONObject *GetABatchOfBusinessTransactionClassificationResults200ApplicationJSON
}
