package shared

type AccountstatusesCustomBatchResponseEntry struct {
	AccountStatus *AccountStatus `json:"accountStatus"`
	BatchID       *int64         `json:"batchId"`
	Errors        *Errors        `json:"errors"`
}
