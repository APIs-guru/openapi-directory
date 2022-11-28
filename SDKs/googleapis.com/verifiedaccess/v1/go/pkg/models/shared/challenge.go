package shared

// Challenge
// Result message for VerifiedAccess.CreateChallenge.
type Challenge struct {
	AlternativeChallenge *SignedData `json:"alternativeChallenge,omitempty"`
	Challenge            *SignedData `json:"challenge,omitempty"`
}
