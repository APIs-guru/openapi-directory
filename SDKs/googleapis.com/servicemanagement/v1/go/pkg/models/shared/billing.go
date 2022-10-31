package shared

type Billing struct {
	ConsumerDestinations []BillingDestination `json:"consumerDestinations,omitempty"`
}
