package shared

type OrderDeliveryDetails struct {
	Address     *OrderAddress `json:"address"`
	PhoneNumber *string       `json:"phoneNumber"`
}
