package shared

// FetchCaCertsResponse
// Response message for CertificateAuthorityService.FetchCaCerts.
type FetchCaCertsResponse struct {
	CaCerts []CertChain `json:"caCerts,omitempty"`
}
