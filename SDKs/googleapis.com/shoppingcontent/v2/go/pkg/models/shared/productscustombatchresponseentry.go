package shared

type ProductsCustomBatchResponseEntry struct {
	BatchID *int64   `json:"batchId"`
	Errors  *Errors  `json:"errors"`
	Kind    *string  `json:"kind"`
	Product *Product `json:"product"`
}
