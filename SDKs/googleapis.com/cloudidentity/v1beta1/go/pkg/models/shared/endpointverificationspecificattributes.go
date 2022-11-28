package shared

// EndpointVerificationSpecificAttributes
// Resource representing the Endpoint Verification-specific attributes of a Device. https://cloud.google.com/endpoint-verification/docs/overview
type EndpointVerificationSpecificAttributes struct {
	CertificateAttributes []CertificateAttributes `json:"certificateAttributes,omitempty"`
}
