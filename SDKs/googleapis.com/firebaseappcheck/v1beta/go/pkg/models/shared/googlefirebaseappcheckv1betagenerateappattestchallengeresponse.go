package shared

// GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse
// Response message for the GenerateAppAttestChallenge method.
type GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse struct {
	Challenge *string `json:"challenge,omitempty"`
	TTL       *string `json:"ttl,omitempty"`
}
