package shared

// NameMatchCandidateOut
// The ordered list of name matching candidates
type NameMatchCandidateOut struct {
	CandidateName       *string  `json:"candidateName,omitempty"`
	PredScoreFamilyName *float64 `json:"predScoreFamilyName,omitempty"`
	PredScoreGivenName  *float64 `json:"predScoreGivenName,omitempty"`
	Probability         *float64 `json:"probability,omitempty"`
}
