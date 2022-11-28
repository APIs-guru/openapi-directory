package shared

// ActivateCertificateAuthorityRequest
// Request message for CertificateAuthorityService.ActivateCertificateAuthority.
type ActivateCertificateAuthorityRequest struct {
	PemCaCertificate  *string            `json:"pemCaCertificate,omitempty"`
	RequestID         *string            `json:"requestId,omitempty"`
	SubordinateConfig *SubordinateConfig `json:"subordinateConfig,omitempty"`
}
