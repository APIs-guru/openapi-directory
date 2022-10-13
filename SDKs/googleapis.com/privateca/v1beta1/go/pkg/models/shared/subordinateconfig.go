package shared

type SubordinateConfig struct {
	CertificateAuthority *string                 `json:"certificateAuthority"`
	PemIssuerChain       *SubordinateConfigChain `json:"pemIssuerChain"`
}
