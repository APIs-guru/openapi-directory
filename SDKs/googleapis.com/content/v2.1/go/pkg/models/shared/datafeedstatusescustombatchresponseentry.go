package shared

type DatafeedstatusesCustomBatchResponseEntry struct {
	BatchID        *int64          `json:"batchId"`
	DatafeedStatus *DatafeedStatus `json:"datafeedStatus"`
	Errors         *Errors         `json:"errors"`
}
