package shared

type RemoveDNSZoneRequest struct {
	ConsumerNetwork *string `json:"consumerNetwork,omitempty"`
	Name            *string `json:"name,omitempty"`
}
