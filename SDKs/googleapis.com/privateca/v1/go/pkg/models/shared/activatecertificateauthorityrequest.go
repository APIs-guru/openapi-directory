package shared

type ActivateCertificateAuthorityRequest struct {
	PemCaCertificate  *string            `json:"pemCaCertificate"`
	RequestID         *string            `json:"requestId"`
	SubordinateConfig *SubordinateConfig `json:"subordinateConfig"`
}
