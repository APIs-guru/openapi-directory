package shared

type UpdateDNSRecordSetRequest struct {
	ConsumerNetwork      *string       `json:"consumerNetwork"`
	ExistingDNSRecordSet *DNSRecordSet `json:"existingDnsRecordSet"`
	NewDNSRecordSet      *DNSRecordSet `json:"newDnsRecordSet"`
	Zone                 *string       `json:"zone"`
}
