package shared

// GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse
// Response message for the GeneratePlayIntegrityChallenge method.
type GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse struct {
	Challenge *string `json:"challenge,omitempty"`
	TTL       *string `json:"ttl,omitempty"`
}
