package shared

type ListCertificateMapsResponse struct {
	CertificateMaps []CertificateMap `json:"certificateMaps,omitempty"`
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
	Unreachable     []string         `json:"unreachable,omitempty"`
}
