package shared



type ProductsCustomBatchRequestEntry struct {
    BatchID *int64 `json:"batchId,omitempty"`
    MerchantID *string `json:"merchantId,omitempty"`
    Method *string `json:"method,omitempty"`
    Product *Product `json:"product,omitempty"`
    ProductID *string `json:"productId,omitempty"`
    
}

