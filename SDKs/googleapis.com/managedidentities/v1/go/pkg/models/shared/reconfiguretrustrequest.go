package shared

type ReconfigureTrustRequest struct {
	TargetDNSIPAddresses []string `json:"targetDnsIpAddresses,omitempty"`
	TargetDomainName     *string  `json:"targetDomainName,omitempty"`
}
