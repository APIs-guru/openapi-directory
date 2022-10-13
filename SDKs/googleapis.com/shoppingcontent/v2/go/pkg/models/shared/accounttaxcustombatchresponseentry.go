package shared

type AccounttaxCustomBatchResponseEntry struct {
	AccountTax *AccountTax `json:"accountTax"`
	BatchID    *int64      `json:"batchId"`
	Errors     *Errors     `json:"errors"`
	Kind       *string     `json:"kind"`
}
