package shared

type RegionalinventoryCustomBatchResponseEntry struct {
	BatchID           *int64             `json:"batchId"`
	Errors            *Errors            `json:"errors"`
	Kind              *string            `json:"kind"`
	RegionalInventory *RegionalInventory `json:"regionalInventory"`
}
