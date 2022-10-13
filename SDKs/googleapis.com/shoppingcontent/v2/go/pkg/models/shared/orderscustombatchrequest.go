package shared

type OrdersCustomBatchRequest struct {
	Entries []OrdersCustomBatchRequestEntry `json:"entries"`
}
