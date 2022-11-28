package shared

// GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest
// Request message for the ExchangeAppAttestAssertion method.
type GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest struct {
	Artifact  *string `json:"artifact,omitempty"`
	Assertion *string `json:"assertion,omitempty"`
	Challenge *string `json:"challenge,omitempty"`
}
