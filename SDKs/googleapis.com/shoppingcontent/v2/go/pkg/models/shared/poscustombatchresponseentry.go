package shared



type PosCustomBatchResponseEntry struct {
    BatchID *int64 `json:"batchId,omitempty"`
    Errors *Errors `json:"errors,omitempty"`
    Inventory *PosInventory `json:"inventory,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Sale *PosSale `json:"sale,omitempty"`
    Store *PosStore `json:"store,omitempty"`
    
}

