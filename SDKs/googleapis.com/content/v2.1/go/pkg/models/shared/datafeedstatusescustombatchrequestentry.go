package shared

type DatafeedstatusesCustomBatchRequestEntry struct {
	BatchID    *int64  `json:"batchId"`
	Country    *string `json:"country"`
	DatafeedID *string `json:"datafeedId"`
	Language   *string `json:"language"`
	MerchantID *string `json:"merchantId"`
	Method     *string `json:"method"`
}
