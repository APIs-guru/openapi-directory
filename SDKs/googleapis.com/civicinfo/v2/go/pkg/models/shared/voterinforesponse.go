package shared

type VoterInfoResponse struct {
	Contests         []Contest              `json:"contests"`
	DropOffLocations []PollingLocation      `json:"dropOffLocations"`
	EarlyVoteSites   []PollingLocation      `json:"earlyVoteSites"`
	Election         *Election              `json:"election"`
	Kind             *string                `json:"kind"`
	MailOnly         *bool                  `json:"mailOnly"`
	NormalizedInput  *SimpleAddressType     `json:"normalizedInput"`
	OtherElections   []Election             `json:"otherElections"`
	PollingLocations []PollingLocation      `json:"pollingLocations"`
	PrecinctID       *string                `json:"precinctId"`
	Precincts        []Precinct             `json:"precincts"`
	State            []AdministrationRegion `json:"state"`
}
