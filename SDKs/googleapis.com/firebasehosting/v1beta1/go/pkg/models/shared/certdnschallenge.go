package shared



type CertDNSChallenge struct {
    DomainName *string `json:"domainName,omitempty"`
    Token *string `json:"token,omitempty"`
    
}

