package shared

type AddDNSRecordSetRequest struct {
	ConsumerNetwork *string       `json:"consumerNetwork"`
	DNSRecordSet    *DNSRecordSet `json:"dnsRecordSet"`
	Zone            *string       `json:"zone"`
}
