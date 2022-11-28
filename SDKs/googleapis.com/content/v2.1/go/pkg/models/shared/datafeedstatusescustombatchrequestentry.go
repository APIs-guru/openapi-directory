package shared

// DatafeedstatusesCustomBatchRequestEntry
// A batch entry encoding a single non-batch datafeedstatuses request.
type DatafeedstatusesCustomBatchRequestEntry struct {
	BatchID    *int64  `json:"batchId,omitempty"`
	Country    *string `json:"country,omitempty"`
	DatafeedID *string `json:"datafeedId,omitempty"`
	FeedLabel  *string `json:"feedLabel,omitempty"`
	Language   *string `json:"language,omitempty"`
	MerchantID *string `json:"merchantId,omitempty"`
	Method     *string `json:"method,omitempty"`
}
