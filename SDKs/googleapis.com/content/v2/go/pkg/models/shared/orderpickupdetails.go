package shared

type OrderPickupDetails struct {
	Address    *OrderAddress                 `json:"address"`
	Collectors []OrderPickupDetailsCollector `json:"collectors"`
	LocationID *string                       `json:"locationId"`
}
