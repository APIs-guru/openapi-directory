package shared

// GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest
// Request message for the ExchangeAppAttestAssertion method.
type GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest struct {
	Artifact  *string `json:"artifact,omitempty"`
	Assertion *string `json:"assertion,omitempty"`
	Challenge *string `json:"challenge,omitempty"`
}
