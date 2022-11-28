package shared

// ProductstatusesCustomBatchResponseEntry
// A batch entry encoding a single non-batch productstatuses response.
type ProductstatusesCustomBatchResponseEntry struct {
	BatchID       *int64         `json:"batchId,omitempty"`
	Errors        *Errors        `json:"errors,omitempty"`
	Kind          *string        `json:"kind,omitempty"`
	ProductStatus *ProductStatus `json:"productStatus,omitempty"`
}
