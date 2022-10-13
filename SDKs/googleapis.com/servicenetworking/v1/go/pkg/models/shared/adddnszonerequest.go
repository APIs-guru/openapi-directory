package shared

type AddDNSZoneRequest struct {
	ConsumerNetwork *string `json:"consumerNetwork"`
	DNSSuffix       *string `json:"dnsSuffix"`
	Name            *string `json:"name"`
}
