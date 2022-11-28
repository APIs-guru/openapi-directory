package shared

// RegionalinventoryCustomBatchRequestEntry
// A batch entry encoding a single non-batch regional inventory request.
type RegionalinventoryCustomBatchRequestEntry struct {
	BatchID           *int64             `json:"batchId,omitempty"`
	MerchantID        *string            `json:"merchantId,omitempty"`
	Method            *string            `json:"method,omitempty"`
	ProductID         *string            `json:"productId,omitempty"`
	RegionalInventory *RegionalInventory `json:"regionalInventory,omitempty"`
}
