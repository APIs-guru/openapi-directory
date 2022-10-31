package shared

type OrderPickupDetails struct {
	Address    *OrderAddress                 `json:"address,omitempty"`
	Collectors []OrderPickupDetailsCollector `json:"collectors,omitempty"`
	LocationID *string                       `json:"locationId,omitempty"`
	PickupType *string                       `json:"pickupType,omitempty"`
}
