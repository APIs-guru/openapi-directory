package shared

// ProductstatusesCustomBatchRequestEntry
// A batch entry encoding a single non-batch productstatuses request.
type ProductstatusesCustomBatchRequestEntry struct {
	BatchID           *int64   `json:"batchId,omitempty"`
	Destinations      []string `json:"destinations,omitempty"`
	IncludeAttributes *bool    `json:"includeAttributes,omitempty"`
	MerchantID        *string  `json:"merchantId,omitempty"`
	Method            *string  `json:"method,omitempty"`
	ProductID         *string  `json:"productId,omitempty"`
}
