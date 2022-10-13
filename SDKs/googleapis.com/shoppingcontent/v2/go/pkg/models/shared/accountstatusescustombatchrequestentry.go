package shared

type AccountstatusesCustomBatchRequestEntry struct {
	AccountID    *string  `json:"accountId"`
	BatchID      *int64   `json:"batchId"`
	Destinations []string `json:"destinations"`
	MerchantID   *string  `json:"merchantId"`
	Method       *string  `json:"method"`
}
