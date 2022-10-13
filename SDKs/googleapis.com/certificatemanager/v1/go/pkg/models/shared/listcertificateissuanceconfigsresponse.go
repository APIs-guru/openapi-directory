package shared

type ListCertificateIssuanceConfigsResponse struct {
	CertificateIssuanceConfigs []CertificateIssuanceConfig `json:"certificateIssuanceConfigs"`
	NextPageToken              *string                     `json:"nextPageToken"`
	Unreachable                []string                    `json:"unreachable"`
}
