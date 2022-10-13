package shared

type RemoveDNSZoneRequest struct {
	ConsumerNetwork *string `json:"consumerNetwork"`
	Name            *string `json:"name"`
}
