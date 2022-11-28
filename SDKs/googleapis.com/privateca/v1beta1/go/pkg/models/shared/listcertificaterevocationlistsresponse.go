package shared

// ListCertificateRevocationListsResponse
// Response message for CertificateAuthorityService.ListCertificateRevocationLists.
type ListCertificateRevocationListsResponse struct {
	CertificateRevocationLists []CertificateRevocationList `json:"certificateRevocationLists,omitempty"`
	NextPageToken              *string                     `json:"nextPageToken,omitempty"`
	Unreachable                []string                    `json:"unreachable,omitempty"`
}
