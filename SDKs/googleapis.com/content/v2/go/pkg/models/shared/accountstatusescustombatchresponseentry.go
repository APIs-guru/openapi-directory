package shared



type AccountstatusesCustomBatchResponseEntry struct {
    AccountStatus *AccountStatus `json:"accountStatus,omitempty"`
    BatchID *int64 `json:"batchId,omitempty"`
    Errors *Errors `json:"errors,omitempty"`
    
}

