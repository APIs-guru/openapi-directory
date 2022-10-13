package shared

type AccountsCustomBatchResponseEntry struct {
	Account    *Account `json:"account"`
	BatchID    *int64   `json:"batchId"`
	Errors     *Errors  `json:"errors"`
	Kind       *string  `json:"kind"`
	LinkStatus *string  `json:"linkStatus"`
}
