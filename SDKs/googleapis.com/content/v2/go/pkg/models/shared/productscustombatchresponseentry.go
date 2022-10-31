package shared



type ProductsCustomBatchResponseEntry struct {
    BatchID *int64 `json:"batchId,omitempty"`
    Errors *Errors `json:"errors,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Product *Product `json:"product,omitempty"`
    
}

