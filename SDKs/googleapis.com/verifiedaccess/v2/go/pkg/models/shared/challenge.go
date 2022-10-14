package shared

type Challenge struct {
	AlternativeChallenge *string `json:"alternativeChallenge,omitempty"`
	Challenge            *string `json:"challenge,omitempty"`
}
