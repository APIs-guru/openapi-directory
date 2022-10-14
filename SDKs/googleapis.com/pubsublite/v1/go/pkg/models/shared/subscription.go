package shared

type Subscription struct {
	DeliveryConfig *DeliveryConfig `json:"deliveryConfig,omitempty"`
	Name           *string         `json:"name,omitempty"`
	Topic          *string         `json:"topic,omitempty"`
}
