package shared



type RegionalinventoryCustomBatchRequestEntry struct {
    BatchID *int64 `json:"batchId,omitempty"`
    MerchantID *string `json:"merchantId,omitempty"`
    Method *string `json:"method,omitempty"`
    ProductID *string `json:"productId,omitempty"`
    RegionalInventory *RegionalInventory `json:"regionalInventory,omitempty"`
    
}

