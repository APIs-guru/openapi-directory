package shared

type GoogleFirebaseAppcheckV1betaAppCheckToken struct {
	AttestationToken *string `json:"attestationToken"`
	Token            *string `json:"token"`
	TTL              *string `json:"ttl"`
}
