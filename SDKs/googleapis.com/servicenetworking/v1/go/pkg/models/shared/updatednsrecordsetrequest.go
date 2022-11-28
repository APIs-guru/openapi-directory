package shared

// UpdateDNSRecordSetRequest
// Request to update a record set from a private managed DNS zone in the shared producer host project. The name, type, ttl, and data values of the existing record set must all exactly match an existing record set in the specified zone.
type UpdateDNSRecordSetRequest struct {
	ConsumerNetwork      *string       `json:"consumerNetwork,omitempty"`
	ExistingDNSRecordSet *DNSRecordSet `json:"existingDnsRecordSet,omitempty"`
	NewDNSRecordSet      *DNSRecordSet `json:"newDnsRecordSet,omitempty"`
	Zone                 *string       `json:"zone,omitempty"`
}
