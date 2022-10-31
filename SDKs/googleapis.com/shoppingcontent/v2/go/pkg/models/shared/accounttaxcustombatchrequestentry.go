package shared

type AccounttaxCustomBatchRequestEntry struct {
	AccountID  *string     `json:"accountId,omitempty"`
	AccountTax *AccountTax `json:"accountTax,omitempty"`
	BatchID    *int64      `json:"batchId,omitempty"`
	MerchantID *string     `json:"merchantId,omitempty"`
	Method     *string     `json:"method,omitempty"`
}
