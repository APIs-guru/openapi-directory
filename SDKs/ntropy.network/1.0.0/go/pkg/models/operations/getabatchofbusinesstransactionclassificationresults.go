package operations

type GetABatchOfBusinessTransactionClassificationResultsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetABatchOfBusinessTransactionClassificationResults200ApplicationJSONResults struct {
	Labels        []string `json:"labels,omitempty"`
	Logo          *string  `json:"logo,omitempty"`
	Merchant      *string  `json:"merchant,omitempty"`
	TransactionID *string  `json:"transaction_id,omitempty"`
	Website       *string  `json:"website,omitempty"`
}

type GetABatchOfBusinessTransactionClassificationResults200ApplicationJSON struct {
	ID        *string                                                                        `json:"id,omitempty"`
	Progress  *float64                                                                       `json:"progress,omitempty"`
	Results   []GetABatchOfBusinessTransactionClassificationResults200ApplicationJSONResults `json:"results,omitempty"`
	Status    *string                                                                        `json:"status,omitempty"`
	UpdatedAt *string                                                                        `json:"updated_at,omitempty"`
}

type GetABatchOfBusinessTransactionClassificationResultsRequest struct {
	PathParams GetABatchOfBusinessTransactionClassificationResultsPathParams
}

type GetABatchOfBusinessTransactionClassificationResultsResponse struct {
	ContentType                                                                 string
	StatusCode                                                                  int64
	GetABatchOfBusinessTransactionClassificationResults200ApplicationJSONObject *GetABatchOfBusinessTransactionClassificationResults200ApplicationJSON
}
