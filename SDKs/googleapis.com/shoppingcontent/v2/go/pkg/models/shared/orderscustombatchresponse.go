package shared

type OrdersCustomBatchResponse struct {
	Entries []OrdersCustomBatchResponseEntry `json:"entries"`
	Kind    *string                          `json:"kind"`
}
