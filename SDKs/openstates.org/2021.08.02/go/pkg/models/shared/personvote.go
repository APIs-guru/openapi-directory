package shared

type PersonVote struct {
	Option    string         `json:"option"`
	Voter     *CompactPerson `json:"voter,omitempty"`
	VoterName string         `json:"voter_name"`
}
