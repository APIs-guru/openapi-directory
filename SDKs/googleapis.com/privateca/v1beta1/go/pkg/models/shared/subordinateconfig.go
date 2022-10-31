package shared

type SubordinateConfig struct {
	CertificateAuthority *string                 `json:"certificateAuthority,omitempty"`
	PemIssuerChain       *SubordinateConfigChain `json:"pemIssuerChain,omitempty"`
}
