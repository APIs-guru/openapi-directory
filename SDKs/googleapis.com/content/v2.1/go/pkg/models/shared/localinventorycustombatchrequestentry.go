package shared

type LocalinventoryCustomBatchRequestEntry struct {
	BatchID        *int64          `json:"batchId"`
	LocalInventory *LocalInventory `json:"localInventory"`
	MerchantID     *string         `json:"merchantId"`
	Method         *string         `json:"method"`
	ProductID      *string         `json:"productId"`
}
