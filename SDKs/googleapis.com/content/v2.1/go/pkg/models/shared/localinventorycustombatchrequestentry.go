package shared

// LocalinventoryCustomBatchRequestEntry
// Batch entry encoding a single local inventory update request.
type LocalinventoryCustomBatchRequestEntry struct {
	BatchID        *int64          `json:"batchId,omitempty"`
	LocalInventory *LocalInventory `json:"localInventory,omitempty"`
	MerchantID     *string         `json:"merchantId,omitempty"`
	Method         *string         `json:"method,omitempty"`
	ProductID      *string         `json:"productId,omitempty"`
}
