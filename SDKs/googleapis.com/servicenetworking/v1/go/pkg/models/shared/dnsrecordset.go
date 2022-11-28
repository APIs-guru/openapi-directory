package shared

// DNSRecordSet
// Represents a DNS record set resource.
type DNSRecordSet struct {
	Data   []string `json:"data,omitempty"`
	Domain *string  `json:"domain,omitempty"`
	TTL    *string  `json:"ttl,omitempty"`
	Type   *string  `json:"type,omitempty"`
}
