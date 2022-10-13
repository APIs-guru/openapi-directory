package shared

type PosCustomBatchResponseEntry struct {
	BatchID   *int64        `json:"batchId"`
	Errors    *Errors       `json:"errors"`
	Inventory *PosInventory `json:"inventory"`
	Kind      *string       `json:"kind"`
	Sale      *PosSale      `json:"sale"`
	Store     *PosStore     `json:"store"`
}
