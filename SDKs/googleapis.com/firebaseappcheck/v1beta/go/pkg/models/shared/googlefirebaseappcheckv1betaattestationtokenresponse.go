package shared

// GoogleFirebaseAppcheckV1betaAttestationTokenResponse
// Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.
type GoogleFirebaseAppcheckV1betaAttestationTokenResponse struct {
	AttestationToken *string `json:"attestationToken,omitempty"`
	TTL              *string `json:"ttl,omitempty"`
}
