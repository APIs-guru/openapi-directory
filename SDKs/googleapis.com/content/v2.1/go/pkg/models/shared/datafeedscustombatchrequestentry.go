package shared

type DatafeedsCustomBatchRequestEntry struct {
	BatchID    *int64    `json:"batchId"`
	Datafeed   *Datafeed `json:"datafeed"`
	DatafeedID *string   `json:"datafeedId"`
	MerchantID *string   `json:"merchantId"`
	Method     *string   `json:"method"`
}
