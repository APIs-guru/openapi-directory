package shared

type CertificateTemplate struct {
	ID           *string `json:"id,omitempty"`
	MajorVersion *int32  `json:"majorVersion,omitempty"`
	MinorVersion *int32  `json:"minorVersion,omitempty"`
}
