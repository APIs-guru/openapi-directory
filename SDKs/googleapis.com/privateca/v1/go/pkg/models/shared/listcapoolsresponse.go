package shared

// ListCaPoolsResponse
// Response message for CertificateAuthorityService.ListCaPools.
type ListCaPoolsResponse struct {
	CaPools       []CaPool `json:"caPools,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
