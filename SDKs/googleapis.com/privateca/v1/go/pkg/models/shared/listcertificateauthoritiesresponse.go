package shared

// ListCertificateAuthoritiesResponse
// Response message for CertificateAuthorityService.ListCertificateAuthorities.
type ListCertificateAuthoritiesResponse struct {
	CertificateAuthorities []CertificateAuthority `json:"certificateAuthorities,omitempty"`
	NextPageToken          *string                `json:"nextPageToken,omitempty"`
	Unreachable            []string               `json:"unreachable,omitempty"`
}
