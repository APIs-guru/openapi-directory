package shared

type AccessUrls struct {
	CaCertificateAccessURL *string  `json:"caCertificateAccessUrl"`
	CrlAccessUrls          []string `json:"crlAccessUrls"`
}
