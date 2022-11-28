package shared

// AccountsCustomBatchResponseEntry
// A batch entry encoding a single non-batch accounts response.
type AccountsCustomBatchResponseEntry struct {
	Account *Account `json:"account,omitempty"`
	BatchID *int64   `json:"batchId,omitempty"`
	Errors  *Errors  `json:"errors,omitempty"`
	Kind    *string  `json:"kind,omitempty"`
}
