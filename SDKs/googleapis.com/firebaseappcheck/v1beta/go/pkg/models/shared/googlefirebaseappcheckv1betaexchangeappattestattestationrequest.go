package shared

// GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest
// Request message for the ExchangeAppAttestAttestation method.
type GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest struct {
	AttestationStatement *string `json:"attestationStatement,omitempty"`
	Challenge            *string `json:"challenge,omitempty"`
	KeyID                *string `json:"keyId,omitempty"`
}
