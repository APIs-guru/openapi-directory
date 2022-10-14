package shared

type OrderDeliveryDetails struct {
	Address     *OrderAddress `json:"address,omitempty"`
	PhoneNumber *string       `json:"phoneNumber,omitempty"`
}
