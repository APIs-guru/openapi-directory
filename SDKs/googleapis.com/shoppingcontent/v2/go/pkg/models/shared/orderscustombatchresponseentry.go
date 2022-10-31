package shared

type OrdersCustomBatchResponseEntry struct {
	BatchID         *int64  `json:"batchId,omitempty"`
	Errors          *Errors `json:"errors,omitempty"`
	ExecutionStatus *string `json:"executionStatus,omitempty"`
	Kind            *string `json:"kind,omitempty"`
	Order           *Order  `json:"order,omitempty"`
}
