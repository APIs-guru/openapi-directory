package shared

type GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest struct {
	AttestationStatement *string `json:"attestationStatement"`
	Challenge            *string `json:"challenge"`
	KeyID                *string `json:"keyId"`
}
