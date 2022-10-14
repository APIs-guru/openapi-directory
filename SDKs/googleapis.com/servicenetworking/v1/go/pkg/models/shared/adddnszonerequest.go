package shared

type AddDNSZoneRequest struct {
	ConsumerNetwork *string `json:"consumerNetwork,omitempty"`
	DNSSuffix       *string `json:"dnsSuffix,omitempty"`
	Name            *string `json:"name,omitempty"`
}
