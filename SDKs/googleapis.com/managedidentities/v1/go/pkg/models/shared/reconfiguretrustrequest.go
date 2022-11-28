package shared

// ReconfigureTrustRequest
// Request message for ReconfigureTrust
type ReconfigureTrustRequest struct {
	TargetDNSIPAddresses []string `json:"targetDnsIpAddresses,omitempty"`
	TargetDomainName     *string  `json:"targetDomainName,omitempty"`
}
