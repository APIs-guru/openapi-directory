package operations

type GetABatchOfConsumerTransactionClassificationResultsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetABatchOfConsumerTransactionClassificationResultsRequest struct {
	PathParams GetABatchOfConsumerTransactionClassificationResultsPathParams
}

type GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsContact struct {
	Email *string `json:"email,omitempty"`
	Phone *string `json:"phone,omitempty"`
}

type GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsLocation struct {
	Address    *string  `json:"address,omitempty"`
	City       *string  `json:"city,omitempty"`
	Country    *string  `json:"country,omitempty"`
	Lat        *float64 `json:"lat,omitempty"`
	Lon        *float64 `json:"lon,omitempty"`
	PostalCode *string  `json:"postal_code,omitempty"`
}

type GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsRating struct {
	Reviews *float64 `json:"reviews,omitempty"`
	Value   *float64 `json:"value,omitempty"`
}

type GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResults struct {
	Contact       *GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsContact  `json:"contact,omitempty"`
	Labels        []string                                                                              `json:"labels,omitempty"`
	Location      *GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsLocation `json:"location,omitempty"`
	Logo          *string                                                                               `json:"logo,omitempty"`
	Merchant      *string                                                                               `json:"merchant,omitempty"`
	Person        *string                                                                               `json:"person,omitempty"`
	Rating        *GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsRating   `json:"rating,omitempty"`
	TransactionID *string                                                                               `json:"transaction_id,omitempty"`
	Website       *string                                                                               `json:"website,omitempty"`
}

type GetABatchOfConsumerTransactionClassificationResults200ApplicationJSON struct {
	ID        *string                                                                        `json:"id,omitempty"`
	Progress  *float64                                                                       `json:"progress,omitempty"`
	Results   []GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResults `json:"results,omitempty"`
	Status    *string                                                                        `json:"status,omitempty"`
	UpdatedAt *string                                                                        `json:"updated_at,omitempty"`
}

type GetABatchOfConsumerTransactionClassificationResultsResponse struct {
	ContentType                                                                 string
	StatusCode                                                                  int64
	GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject *GetABatchOfConsumerTransactionClassificationResults200ApplicationJSON
}
