package shared

type OrdersCustomBatchResponseEntry struct {
	BatchID         *int64  `json:"batchId"`
	Errors          *Errors `json:"errors"`
	ExecutionStatus *string `json:"executionStatus"`
	Kind            *string `json:"kind"`
	Order           *Order  `json:"order"`
}
