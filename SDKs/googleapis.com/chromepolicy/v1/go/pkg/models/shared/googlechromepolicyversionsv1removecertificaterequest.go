package shared

// GoogleChromePolicyVersionsV1RemoveCertificateRequest
// Request object for removing a certificate.
type GoogleChromePolicyVersionsV1RemoveCertificateRequest struct {
	NetworkID      *string `json:"networkId,omitempty"`
	TargetResource *string `json:"targetResource,omitempty"`
}
