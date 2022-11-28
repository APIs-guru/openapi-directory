package shared

// Challenge
// Result message for VerifiedAccess.GenerateChallenge.
type Challenge struct {
	AlternativeChallenge *string `json:"alternativeChallenge,omitempty"`
	Challenge            *string `json:"challenge,omitempty"`
}
