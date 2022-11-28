package shared

// RemoveDNSZoneRequest
// Request to remove a private managed DNS zone in the shared producer host project and a matching DNS peering zone in the consumer project.
type RemoveDNSZoneRequest struct {
	ConsumerNetwork *string `json:"consumerNetwork,omitempty"`
	Name            *string `json:"name,omitempty"`
}
