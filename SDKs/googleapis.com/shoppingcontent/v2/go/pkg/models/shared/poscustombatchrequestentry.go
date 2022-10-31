package shared



type PosCustomBatchRequestEntry struct {
    BatchID *int64 `json:"batchId,omitempty"`
    Inventory *PosInventory `json:"inventory,omitempty"`
    MerchantID *string `json:"merchantId,omitempty"`
    Method *string `json:"method,omitempty"`
    Sale *PosSale `json:"sale,omitempty"`
    Store *PosStore `json:"store,omitempty"`
    StoreCode *string `json:"storeCode,omitempty"`
    TargetMerchantID *string `json:"targetMerchantId,omitempty"`
    
}

