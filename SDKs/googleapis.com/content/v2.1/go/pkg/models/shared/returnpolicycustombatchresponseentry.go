package shared

type ReturnpolicyCustomBatchResponseEntry struct {
	BatchID      *int64        `json:"batchId,omitempty"`
	Errors       *Errors       `json:"errors,omitempty"`
	Kind         *string       `json:"kind,omitempty"`
	ReturnPolicy *ReturnPolicy `json:"returnPolicy,omitempty"`
}
