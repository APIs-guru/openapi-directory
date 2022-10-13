package shared

type LocalinventoryCustomBatchResponseEntry struct {
	BatchID *int64  `json:"batchId"`
	Errors  *Errors `json:"errors"`
	Kind    *string `json:"kind"`
}
