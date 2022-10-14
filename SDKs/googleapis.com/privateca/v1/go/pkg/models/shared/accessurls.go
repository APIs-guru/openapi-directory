package shared

type AccessUrls struct {
	CaCertificateAccessURL *string  `json:"caCertificateAccessUrl,omitempty"`
	CrlAccessUrls          []string `json:"crlAccessUrls,omitempty"`
}
