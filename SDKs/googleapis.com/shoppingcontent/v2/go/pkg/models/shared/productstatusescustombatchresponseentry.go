package shared

type ProductstatusesCustomBatchResponseEntry struct {
	BatchID       *int64         `json:"batchId"`
	Errors        *Errors        `json:"errors"`
	Kind          *string        `json:"kind"`
	ProductStatus *ProductStatus `json:"productStatus"`
}
