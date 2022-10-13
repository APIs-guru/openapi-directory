package shared

type TestOrderDeliveryDetails struct {
	Address             *TestOrderAddress `json:"address"`
	IsScheduledDelivery *bool             `json:"isScheduledDelivery"`
	PhoneNumber         *string           `json:"phoneNumber"`
}
