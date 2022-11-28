package shared

// SubordinateConfig
// Describes a subordinate CA's issuers. This is either a resource name to a known issuing CertificateAuthority, or a PEM issuer certificate chain.
type SubordinateConfig struct {
	CertificateAuthority *string                 `json:"certificateAuthority,omitempty"`
	PemIssuerChain       *SubordinateConfigChain `json:"pemIssuerChain,omitempty"`
}
