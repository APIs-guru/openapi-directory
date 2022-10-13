package shared

type CertificateTemplate struct {
	ID           *string `json:"id"`
	MajorVersion *int32  `json:"majorVersion"`
	MinorVersion *int32  `json:"minorVersion"`
}
