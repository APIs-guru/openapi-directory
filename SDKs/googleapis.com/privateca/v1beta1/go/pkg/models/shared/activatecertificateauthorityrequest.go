package shared



type ActivateCertificateAuthorityRequest struct {
    PemCaCertificate *string `json:"pemCaCertificate,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    SubordinateConfig *SubordinateConfig `json:"subordinateConfig,omitempty"`
    
}

