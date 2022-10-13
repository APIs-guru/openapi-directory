package shared

type NameMatchCandidateOut struct {
	CandidateName       *string  `json:"candidateName"`
	PredScoreFamilyName *float64 `json:"predScoreFamilyName"`
	PredScoreGivenName  *float64 `json:"predScoreGivenName"`
	Probability         *float64 `json:"probability"`
}
