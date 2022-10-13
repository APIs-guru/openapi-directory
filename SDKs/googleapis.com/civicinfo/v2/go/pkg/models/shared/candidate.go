package shared

type Candidate struct {
	CandidateURL  *string   `json:"candidateUrl"`
	Channels      []Channel `json:"channels"`
	Email         *string   `json:"email"`
	Name          *string   `json:"name"`
	OrderOnBallot *string   `json:"orderOnBallot"`
	Party         *string   `json:"party"`
	Phone         *string   `json:"phone"`
	PhotoURL      *string   `json:"photoUrl"`
}
