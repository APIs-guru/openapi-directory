package shared

// CertDNSChallenge
// Represents a DNS certificate challenge.
type CertDNSChallenge struct {
	DomainName *string `json:"domainName,omitempty"`
	Token      *string `json:"token,omitempty"`
}
