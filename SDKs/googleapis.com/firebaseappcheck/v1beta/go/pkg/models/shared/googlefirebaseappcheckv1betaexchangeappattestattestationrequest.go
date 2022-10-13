package shared

type GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest struct {
	AttestationStatement *string `json:"attestationStatement"`
	Challenge            *string `json:"challenge"`
	KeyID                *string `json:"keyId"`
}
