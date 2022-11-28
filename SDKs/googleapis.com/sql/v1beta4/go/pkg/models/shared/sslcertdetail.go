package shared

// SslCertDetail
// SslCertDetail.
type SslCertDetail struct {
	CertInfo       *SslCert `json:"certInfo,omitempty"`
	CertPrivateKey *string  `json:"certPrivateKey,omitempty"`
}
