package shared

type DatafeedsCustomBatchResponseEntry struct {
	BatchID  *int64    `json:"batchId"`
	Datafeed *Datafeed `json:"datafeed"`
	Errors   *Errors   `json:"errors"`
}
