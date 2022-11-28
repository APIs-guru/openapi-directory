package shared

// AccountstatusesCustomBatchResponseEntry
// A batch entry encoding a single non-batch accountstatuses response.
type AccountstatusesCustomBatchResponseEntry struct {
	AccountStatus *AccountStatus `json:"accountStatus,omitempty"`
	BatchID       *int64         `json:"batchId,omitempty"`
	Errors        *Errors        `json:"errors,omitempty"`
}
