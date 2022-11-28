package shared

// LocalinventoryCustomBatchResponseEntry
// Batch entry encoding a single local inventory update response.
type LocalinventoryCustomBatchResponseEntry struct {
	BatchID *int64  `json:"batchId,omitempty"`
	Errors  *Errors `json:"errors,omitempty"`
	Kind    *string `json:"kind,omitempty"`
}
