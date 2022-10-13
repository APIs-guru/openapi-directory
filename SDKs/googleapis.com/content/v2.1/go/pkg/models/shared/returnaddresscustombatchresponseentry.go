package shared

type ReturnaddressCustomBatchResponseEntry struct {
	BatchID       *int64         `json:"batchId"`
	Errors        *Errors        `json:"errors"`
	Kind          *string        `json:"kind"`
	ReturnAddress *ReturnAddress `json:"returnAddress"`
}
