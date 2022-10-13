package shared

type Challenge struct {
	AlternativeChallenge *SignedData `json:"alternativeChallenge"`
	Challenge            *SignedData `json:"challenge"`
}
