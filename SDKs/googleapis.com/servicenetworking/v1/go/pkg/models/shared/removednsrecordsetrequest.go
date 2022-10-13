package shared

type RemoveDNSRecordSetRequest struct {
	ConsumerNetwork *string       `json:"consumerNetwork"`
	DNSRecordSet    *DNSRecordSet `json:"dnsRecordSet"`
	Zone            *string       `json:"zone"`
}
