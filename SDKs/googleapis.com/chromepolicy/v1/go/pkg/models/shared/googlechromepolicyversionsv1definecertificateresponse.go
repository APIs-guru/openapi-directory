package shared

// GoogleChromePolicyVersionsV1DefineCertificateResponse
// Response object for creating a certificate.
type GoogleChromePolicyVersionsV1DefineCertificateResponse struct {
	NetworkID      *string                                      `json:"networkId,omitempty"`
	Settings       []GoogleChromePolicyVersionsV1NetworkSetting `json:"settings,omitempty"`
	TargetResource *string                                      `json:"targetResource,omitempty"`
}
