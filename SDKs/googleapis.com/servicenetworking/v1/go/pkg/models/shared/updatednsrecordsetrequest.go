package shared

type UpdateDNSRecordSetRequest struct {
	ConsumerNetwork      *string       `json:"consumerNetwork,omitempty"`
	ExistingDNSRecordSet *DNSRecordSet `json:"existingDnsRecordSet,omitempty"`
	NewDNSRecordSet      *DNSRecordSet `json:"newDnsRecordSet,omitempty"`
	Zone                 *string       `json:"zone,omitempty"`
}
