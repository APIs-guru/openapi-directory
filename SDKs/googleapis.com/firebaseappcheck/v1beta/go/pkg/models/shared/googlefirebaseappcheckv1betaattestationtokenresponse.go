package shared

type GoogleFirebaseAppcheckV1betaAttestationTokenResponse struct {
	AttestationToken *string `json:"attestationToken"`
	TTL              *string `json:"ttl"`
}
