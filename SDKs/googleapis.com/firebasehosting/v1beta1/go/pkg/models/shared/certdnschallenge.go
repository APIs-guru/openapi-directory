package shared

type CertDNSChallenge struct {
	DomainName *string `json:"domainName"`
	Token      *string `json:"token"`
}
