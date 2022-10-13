package shared

type OrdersData struct {
	Average *float32 `json:"average"`
	Count   *float32 `json:"count"`
	Date    *string  `json:"date"`
	Paid    *float32 `json:"paid"`
	Pending *float32 `json:"pending"`
	Total   *float32 `json:"total"`
}
