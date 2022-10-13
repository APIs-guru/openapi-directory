package shared

type ReturnpolicyCustomBatchResponseEntry struct {
	BatchID      *int64        `json:"batchId"`
	Errors       *Errors       `json:"errors"`
	Kind         *string       `json:"kind"`
	ReturnPolicy *ReturnPolicy `json:"returnPolicy"`
}
