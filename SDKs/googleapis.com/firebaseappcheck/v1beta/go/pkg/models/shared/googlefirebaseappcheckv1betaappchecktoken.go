package shared

// GoogleFirebaseAppcheckV1betaAppCheckToken
// Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.
type GoogleFirebaseAppcheckV1betaAppCheckToken struct {
	AttestationToken *string `json:"attestationToken,omitempty"`
	Token            *string `json:"token,omitempty"`
	TTL              *string `json:"ttl,omitempty"`
}
