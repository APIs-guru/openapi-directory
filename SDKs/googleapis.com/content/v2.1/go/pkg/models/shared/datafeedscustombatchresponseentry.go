package shared

// DatafeedsCustomBatchResponseEntry
// A batch entry encoding a single non-batch datafeeds response.
type DatafeedsCustomBatchResponseEntry struct {
	BatchID  *int64    `json:"batchId,omitempty"`
	Datafeed *Datafeed `json:"datafeed,omitempty"`
	Errors   *Errors   `json:"errors,omitempty"`
}
