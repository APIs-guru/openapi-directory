package shared

type AccounttaxCustomBatchRequestEntry struct {
	AccountID  *string     `json:"accountId"`
	AccountTax *AccountTax `json:"accountTax"`
	BatchID    *int64      `json:"batchId"`
	MerchantID *string     `json:"merchantId"`
	Method     *string     `json:"method"`
}
