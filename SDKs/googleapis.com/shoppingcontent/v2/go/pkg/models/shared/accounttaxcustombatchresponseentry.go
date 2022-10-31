package shared



type AccounttaxCustomBatchResponseEntry struct {
    AccountTax *AccountTax `json:"accountTax,omitempty"`
    BatchID *int64 `json:"batchId,omitempty"`
    Errors *Errors `json:"errors,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

