package shared

// RegionalinventoryCustomBatchResponseEntry
// A batch entry encoding a single non-batch regional inventory response.
type RegionalinventoryCustomBatchResponseEntry struct {
	BatchID           *int64             `json:"batchId,omitempty"`
	Errors            *Errors            `json:"errors,omitempty"`
	Kind              *string            `json:"kind,omitempty"`
	RegionalInventory *RegionalInventory `json:"regionalInventory,omitempty"`
}
