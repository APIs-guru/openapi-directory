package shared

type TestOrderDeliveryDetails struct {
	Address             *TestOrderAddress `json:"address,omitempty"`
	IsScheduledDelivery *bool             `json:"isScheduledDelivery,omitempty"`
	PhoneNumber         *string           `json:"phoneNumber,omitempty"`
}
