package shared

// ListCertificateIssuanceConfigsResponse
// Response for the `ListCertificateIssuanceConfigs` method.
type ListCertificateIssuanceConfigsResponse struct {
	CertificateIssuanceConfigs []CertificateIssuanceConfig `json:"certificateIssuanceConfigs,omitempty"`
	NextPageToken              *string                     `json:"nextPageToken,omitempty"`
	Unreachable                []string                    `json:"unreachable,omitempty"`
}
