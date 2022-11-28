package shared

// CertificateTemplate
// CertificateTemplate (v3 Extension in X.509).
type CertificateTemplate struct {
	ID           *string `json:"id,omitempty"`
	MajorVersion *int32  `json:"majorVersion,omitempty"`
	MinorVersion *int32  `json:"minorVersion,omitempty"`
}
