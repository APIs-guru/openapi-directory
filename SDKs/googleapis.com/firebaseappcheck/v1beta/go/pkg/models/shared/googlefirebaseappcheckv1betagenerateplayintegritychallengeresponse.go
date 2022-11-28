package shared

// GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse
// Response message for the GeneratePlayIntegrityChallenge method.
type GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse struct {
	Challenge *string `json:"challenge,omitempty"`
	TTL       *string `json:"ttl,omitempty"`
}
