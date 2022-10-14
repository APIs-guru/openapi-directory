package shared

type GoogleFirebaseAppcheckV1betaAppCheckToken struct {
	AttestationToken *string `json:"attestationToken,omitempty"`
	Token            *string `json:"token,omitempty"`
	TTL              *string `json:"ttl,omitempty"`
}
