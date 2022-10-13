package shared

type Subscription struct {
	DeliveryConfig *DeliveryConfig `json:"deliveryConfig"`
	Name           *string         `json:"name"`
	Topic          *string         `json:"topic"`
}
