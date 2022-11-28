package shared

// AccessUrls
// URLs where a CertificateAuthority will publish content.
type AccessUrls struct {
	CaCertificateAccessURL *string  `json:"caCertificateAccessUrl,omitempty"`
	CrlAccessUrls          []string `json:"crlAccessUrls,omitempty"`
}
