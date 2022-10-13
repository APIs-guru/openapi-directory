package shared

type ReconfigureTrustRequest struct {
	TargetDNSIPAddresses []string `json:"targetDnsIpAddresses"`
	TargetDomainName     *string  `json:"targetDomainName"`
}
