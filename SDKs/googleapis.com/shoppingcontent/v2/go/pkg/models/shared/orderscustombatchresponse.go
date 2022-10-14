package shared

type OrdersCustomBatchResponse struct {
	Entries []OrdersCustomBatchResponseEntry `json:"entries,omitempty"`
	Kind    *string                          `json:"kind,omitempty"`
}
