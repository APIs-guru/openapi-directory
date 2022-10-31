package shared

type ValidateConsumerConfigRequest struct {
	CheckServiceNetworkingUsePermission *bool             `json:"checkServiceNetworkingUsePermission,omitempty"`
	ConsumerNetwork                     *string           `json:"consumerNetwork,omitempty"`
	ConsumerProject                     *ConsumerProject  `json:"consumerProject,omitempty"`
	RangeReservation                    *RangeReservation `json:"rangeReservation,omitempty"`
	ValidateNetwork                     *bool             `json:"validateNetwork,omitempty"`
}
