package shared

type PosCustomBatchRequestEntry struct {
	BatchID          *int64        `json:"batchId"`
	Inventory        *PosInventory `json:"inventory"`
	MerchantID       *string       `json:"merchantId"`
	Method           *string       `json:"method"`
	Sale             *PosSale      `json:"sale"`
	Store            *PosStore     `json:"store"`
	StoreCode        *string       `json:"storeCode"`
	TargetMerchantID *string       `json:"targetMerchantId"`
}
