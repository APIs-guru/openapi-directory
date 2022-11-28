package shared

// AccessUrls
// URLs where a CertificateAuthority will publish content.
type AccessUrls struct {
	CaCertificateAccessURL *string `json:"caCertificateAccessUrl,omitempty"`
	CrlAccessURL           *string `json:"crlAccessUrl,omitempty"`
}
