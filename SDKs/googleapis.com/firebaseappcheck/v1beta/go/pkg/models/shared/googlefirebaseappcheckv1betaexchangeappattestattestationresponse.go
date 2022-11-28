package shared

// GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse
// Response message for the ExchangeAppAttestAttestation method.
type GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse struct {
	AppCheckToken    *GoogleFirebaseAppcheckV1betaAppCheckToken            `json:"appCheckToken,omitempty"`
	Artifact         *string                                               `json:"artifact,omitempty"`
	AttestationToken *GoogleFirebaseAppcheckV1betaAttestationTokenResponse `json:"attestationToken,omitempty"`
}
