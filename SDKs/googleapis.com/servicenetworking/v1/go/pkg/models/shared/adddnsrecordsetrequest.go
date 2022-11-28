package shared

// AddDNSRecordSetRequest
// Request to add a record set to a private managed DNS zone in the shared producer host project.
type AddDNSRecordSetRequest struct {
	ConsumerNetwork *string       `json:"consumerNetwork,omitempty"`
	DNSRecordSet    *DNSRecordSet `json:"dnsRecordSet,omitempty"`
	Zone            *string       `json:"zone,omitempty"`
}
