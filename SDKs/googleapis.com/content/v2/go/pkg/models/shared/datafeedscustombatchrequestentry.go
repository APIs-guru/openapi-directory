package shared

// DatafeedsCustomBatchRequestEntry
// A batch entry encoding a single non-batch datafeeds request.
type DatafeedsCustomBatchRequestEntry struct {
	BatchID    *int64    `json:"batchId,omitempty"`
	Datafeed   *Datafeed `json:"datafeed,omitempty"`
	DatafeedID *string   `json:"datafeedId,omitempty"`
	MerchantID *string   `json:"merchantId,omitempty"`
	Method     *string   `json:"method,omitempty"`
}
