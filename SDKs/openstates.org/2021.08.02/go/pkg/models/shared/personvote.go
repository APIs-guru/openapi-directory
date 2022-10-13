package shared

type PersonVote struct {
	Option    string         `json:"option"`
	Voter     *CompactPerson `json:"voter"`
	VoterName string         `json:"voter_name"`
}
