package shared

// GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest
// Request message for the ExchangeAppAttestAttestation method.
type GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest struct {
	AttestationStatement *string `json:"attestationStatement,omitempty"`
	Challenge            *string `json:"challenge,omitempty"`
	KeyID                *string `json:"keyId,omitempty"`
}
