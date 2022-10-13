package shared

type ListCertificateAuthoritiesResponse struct {
	CertificateAuthorities []CertificateAuthority `json:"certificateAuthorities"`
	NextPageToken          *string                `json:"nextPageToken"`
	Unreachable            []string               `json:"unreachable"`
}
