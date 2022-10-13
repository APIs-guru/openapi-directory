package shared

type SslCertDetail struct {
	CertInfo       *SslCert `json:"certInfo"`
	CertPrivateKey *string  `json:"certPrivateKey"`
}
