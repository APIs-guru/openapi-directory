package shared

type ListCertificateTemplatesResponse struct {
	CertificateTemplates []CertificateTemplate `json:"certificateTemplates"`
	NextPageToken        *string               `json:"nextPageToken"`
	Unreachable          []string              `json:"unreachable"`
}
