package shared

type ProductstatusesCustomBatchRequestEntry struct {
	BatchID           *int64   `json:"batchId"`
	Destinations      []string `json:"destinations"`
	IncludeAttributes *bool    `json:"includeAttributes"`
	MerchantID        *string  `json:"merchantId"`
	Method            *string  `json:"method"`
	ProductID         *string  `json:"productId"`
}
