package shared

type ListCertificateRevocationListsResponse struct {
	CertificateRevocationLists []CertificateRevocationList `json:"certificateRevocationLists,omitempty"`
	NextPageToken              *string                     `json:"nextPageToken,omitempty"`
	Unreachable                []string                    `json:"unreachable,omitempty"`
}
