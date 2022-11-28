package shared

// ListCertificateTemplatesResponse
// Response message for CertificateAuthorityService.ListCertificateTemplates.
type ListCertificateTemplatesResponse struct {
	CertificateTemplates []CertificateTemplate `json:"certificateTemplates,omitempty"`
	NextPageToken        *string               `json:"nextPageToken,omitempty"`
	Unreachable          []string              `json:"unreachable,omitempty"`
}
