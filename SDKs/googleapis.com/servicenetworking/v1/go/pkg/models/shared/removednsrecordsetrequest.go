package shared

// RemoveDNSRecordSetRequest
// Request to remove a record set from a private managed DNS zone in the shared producer host project. The name, type, ttl, and data values must all exactly match an existing record set in the specified zone.
type RemoveDNSRecordSetRequest struct {
	ConsumerNetwork *string       `json:"consumerNetwork,omitempty"`
	DNSRecordSet    *DNSRecordSet `json:"dnsRecordSet,omitempty"`
	Zone            *string       `json:"zone,omitempty"`
}
