package shared

// DatafeedstatusesCustomBatchResponseEntry
// A batch entry encoding a single non-batch datafeedstatuses response.
type DatafeedstatusesCustomBatchResponseEntry struct {
	BatchID        *int64          `json:"batchId,omitempty"`
	DatafeedStatus *DatafeedStatus `json:"datafeedStatus,omitempty"`
	Errors         *Errors         `json:"errors,omitempty"`
}
