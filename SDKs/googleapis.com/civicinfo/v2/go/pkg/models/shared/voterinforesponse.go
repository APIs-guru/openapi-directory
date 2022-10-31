package shared



type VoterInfoResponse struct {
    Contests []Contest `json:"contests,omitempty"`
    DropOffLocations []PollingLocation `json:"dropOffLocations,omitempty"`
    EarlyVoteSites []PollingLocation `json:"earlyVoteSites,omitempty"`
    Election *Election `json:"election,omitempty"`
    Kind *string `json:"kind,omitempty"`
    MailOnly *bool `json:"mailOnly,omitempty"`
    NormalizedInput *SimpleAddressType `json:"normalizedInput,omitempty"`
    OtherElections []Election `json:"otherElections,omitempty"`
    PollingLocations []PollingLocation `json:"pollingLocations,omitempty"`
    PrecinctID *string `json:"precinctId,omitempty"`
    Precincts []Precinct `json:"precincts,omitempty"`
    State []AdministrationRegion `json:"state,omitempty"`
    
}

