package shared

type RemoveDNSRecordSetRequest struct {
	ConsumerNetwork *string       `json:"consumerNetwork,omitempty"`
	DNSRecordSet    *DNSRecordSet `json:"dnsRecordSet,omitempty"`
	Zone            *string       `json:"zone,omitempty"`
}
