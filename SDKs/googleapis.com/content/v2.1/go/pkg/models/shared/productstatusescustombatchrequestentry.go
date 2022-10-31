package shared



type ProductstatusesCustomBatchRequestEntry struct {
    BatchID *int64 `json:"batchId,omitempty"`
    Destinations []string `json:"destinations,omitempty"`
    IncludeAttributes *bool `json:"includeAttributes,omitempty"`
    MerchantID *string `json:"merchantId,omitempty"`
    Method *string `json:"method,omitempty"`
    ProductID *string `json:"productId,omitempty"`
    
}

