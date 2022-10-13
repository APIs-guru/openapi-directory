package operations

type GetABatchOfConsumerTransactionClassificationResultsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetABatchOfConsumerTransactionClassificationResultsRequest struct {
	PathParams GetABatchOfConsumerTransactionClassificationResultsPathParams
}

type GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsContact struct {
	Email *string `json:"email"`
	Phone *string `json:"phone"`
}

type GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsLocation struct {
	Address    *string  `json:"address"`
	City       *string  `json:"city"`
	Country    *string  `json:"country"`
	Lat        *float64 `json:"lat"`
	Lon        *float64 `json:"lon"`
	PostalCode *string  `json:"postal_code"`
}

type GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsRating struct {
	Reviews *float64 `json:"reviews"`
	Value   *float64 `json:"value"`
}

type GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResults struct {
	Contact       *GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsContact  `json:"contact"`
	Labels        []string                                                                              `json:"labels"`
	Location      *GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsLocation `json:"location"`
	Logo          *string                                                                               `json:"logo"`
	Merchant      *string                                                                               `json:"merchant"`
	Person        *string                                                                               `json:"person"`
	Rating        *GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsRating   `json:"rating"`
	TransactionID *string                                                                               `json:"transaction_id"`
	Website       *string                                                                               `json:"website"`
}

type GetABatchOfConsumerTransactionClassificationResults200ApplicationJSON struct {
	ID        *string                                                                        `json:"id"`
	Progress  *float64                                                                       `json:"progress"`
	Results   []GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResults `json:"results"`
	Status    *string                                                                        `json:"status"`
	UpdatedAt *string                                                                        `json:"updated_at"`
}

type GetABatchOfConsumerTransactionClassificationResultsResponse struct {
	ContentType                                                                 string
	StatusCode                                                                  int64
	GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject *GetABatchOfConsumerTransactionClassificationResults200ApplicationJSON
}
