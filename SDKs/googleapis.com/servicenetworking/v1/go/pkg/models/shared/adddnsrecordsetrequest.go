package shared

type AddDNSRecordSetRequest struct {
	ConsumerNetwork *string       `json:"consumerNetwork,omitempty"`
	DNSRecordSet    *DNSRecordSet `json:"dnsRecordSet,omitempty"`
	Zone            *string       `json:"zone,omitempty"`
}
