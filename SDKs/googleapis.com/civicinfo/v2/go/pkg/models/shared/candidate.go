package shared

// Candidate
// Information about a candidate running for elected office.
type Candidate struct {
	CandidateURL  *string   `json:"candidateUrl,omitempty"`
	Channels      []Channel `json:"channels,omitempty"`
	Email         *string   `json:"email,omitempty"`
	Name          *string   `json:"name,omitempty"`
	OrderOnBallot *string   `json:"orderOnBallot,omitempty"`
	Party         *string   `json:"party,omitempty"`
	Phone         *string   `json:"phone,omitempty"`
	PhotoURL      *string   `json:"photoUrl,omitempty"`
}
