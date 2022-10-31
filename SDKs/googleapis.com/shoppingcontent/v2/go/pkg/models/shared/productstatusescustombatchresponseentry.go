package shared



type ProductstatusesCustomBatchResponseEntry struct {
    BatchID *int64 `json:"batchId,omitempty"`
    Errors *Errors `json:"errors,omitempty"`
    Kind *string `json:"kind,omitempty"`
    ProductStatus *ProductStatus `json:"productStatus,omitempty"`
    
}

