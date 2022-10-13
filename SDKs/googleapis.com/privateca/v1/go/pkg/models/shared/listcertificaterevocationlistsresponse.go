package shared

type ListCertificateRevocationListsResponse struct {
	CertificateRevocationLists []CertificateRevocationList `json:"certificateRevocationLists"`
	NextPageToken              *string                     `json:"nextPageToken"`
	Unreachable                []string                    `json:"unreachable"`
}
