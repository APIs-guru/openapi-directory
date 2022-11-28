package shared

// UpdateConsumerConfigRequestInput
// Request to update the configuration of a service networking connection including the import/export of custom routes and subnetwork routes with public IP.
type UpdateConsumerConfigRequestInput struct {
	ConsumerConfig *ConsumerConfigInput `json:"consumerConfig,omitempty"`
}
