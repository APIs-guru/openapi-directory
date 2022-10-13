package shared

type ListCertificateMapsResponse struct {
	CertificateMaps []CertificateMap `json:"certificateMaps"`
	NextPageToken   *string          `json:"nextPageToken"`
	Unreachable     []string         `json:"unreachable"`
}
