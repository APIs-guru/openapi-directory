package shared

type ValidateConsumerConfigRequest struct {
	CheckServiceNetworkingUsePermission *bool             `json:"checkServiceNetworkingUsePermission"`
	ConsumerNetwork                     *string           `json:"consumerNetwork"`
	ConsumerProject                     *ConsumerProject  `json:"consumerProject"`
	RangeReservation                    *RangeReservation `json:"rangeReservation"`
	ValidateNetwork                     *bool             `json:"validateNetwork"`
}
