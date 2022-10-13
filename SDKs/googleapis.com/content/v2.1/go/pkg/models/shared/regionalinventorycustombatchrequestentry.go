package shared

type RegionalinventoryCustomBatchRequestEntry struct {
	BatchID           *int64             `json:"batchId"`
	MerchantID        *string            `json:"merchantId"`
	Method            *string            `json:"method"`
	ProductID         *string            `json:"productId"`
	RegionalInventory *RegionalInventory `json:"regionalInventory"`
}
