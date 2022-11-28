package shared

// GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse
// Response message for the GenerateAppAttestChallenge method.
type GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse struct {
	Challenge *string `json:"challenge,omitempty"`
	TTL       *string `json:"ttl,omitempty"`
}
