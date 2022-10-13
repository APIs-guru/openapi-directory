package shared

type OrdersGetByMerchantOrderIDResponse struct {
	Kind  *string `json:"kind"`
	Order *Order  `json:"order"`
}
