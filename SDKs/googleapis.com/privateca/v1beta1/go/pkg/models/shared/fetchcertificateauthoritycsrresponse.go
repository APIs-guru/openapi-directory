package shared

// FetchCertificateAuthorityCsrResponse
// Response message for CertificateAuthorityService.FetchCertificateAuthorityCsr.
type FetchCertificateAuthorityCsrResponse struct {
	PemCsr *string `json:"pemCsr,omitempty"`
}
