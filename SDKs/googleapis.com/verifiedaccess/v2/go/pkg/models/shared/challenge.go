package shared

type Challenge struct {
	AlternativeChallenge *string `json:"alternativeChallenge"`
	Challenge            *string `json:"challenge"`
}
