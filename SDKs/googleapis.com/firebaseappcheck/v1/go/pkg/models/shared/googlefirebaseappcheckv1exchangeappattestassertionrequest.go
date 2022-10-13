package shared

type GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest struct {
	Artifact  *string `json:"artifact"`
	Assertion *string `json:"assertion"`
	Challenge *string `json:"challenge"`
}
