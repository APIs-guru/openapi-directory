package shared

// ListPeeredDNSDomainsResponse
// Response to list peered DNS domains for a given connection.
type ListPeeredDNSDomainsResponse struct {
	PeeredDNSDomains []PeeredDNSDomain `json:"peeredDnsDomains,omitempty"`
}
