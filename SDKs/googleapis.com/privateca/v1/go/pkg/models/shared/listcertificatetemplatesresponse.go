package shared



type ListCertificateTemplatesResponse struct {
    CertificateTemplates []CertificateTemplate `json:"certificateTemplates,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

