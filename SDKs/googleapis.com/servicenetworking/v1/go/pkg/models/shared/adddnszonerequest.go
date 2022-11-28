package shared

// AddDNSZoneRequest
// Request to add a private managed DNS zone in the shared producer host project and a matching DNS peering zone in the consumer project.
type AddDNSZoneRequest struct {
	ConsumerNetwork *string `json:"consumerNetwork,omitempty"`
	DNSSuffix       *string `json:"dnsSuffix,omitempty"`
	Name            *string `json:"name,omitempty"`
}
