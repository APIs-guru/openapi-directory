package shared

// AdministrativeBody
// Information about an election administrative body (e.g. County Board of Elections).
type AdministrativeBody struct {
	AbsenteeVotingInfoURL               *string            `json:"absenteeVotingInfoUrl,omitempty"`
	BallotInfoURL                       *string            `json:"ballotInfoUrl,omitempty"`
	CorrespondenceAddress               *SimpleAddressType `json:"correspondenceAddress,omitempty"`
	ElectionInfoURL                     *string            `json:"electionInfoUrl,omitempty"`
	ElectionNoticeText                  *string            `json:"electionNoticeText,omitempty"`
	ElectionNoticeURL                   *string            `json:"electionNoticeUrl,omitempty"`
	ElectionOfficials                   []ElectionOfficial `json:"electionOfficials,omitempty"`
	ElectionRegistrationConfirmationURL *string            `json:"electionRegistrationConfirmationUrl,omitempty"`
	ElectionRegistrationURL             *string            `json:"electionRegistrationUrl,omitempty"`
	ElectionRulesURL                    *string            `json:"electionRulesUrl,omitempty"`
	HoursOfOperation                    *string            `json:"hoursOfOperation,omitempty"`
	Name                                *string            `json:"name,omitempty"`
	PhysicalAddress                     *SimpleAddressType `json:"physicalAddress,omitempty"`
	VoterServices                       []string           `json:"voter_services,omitempty"`
	VotingLocationFinderURL             *string            `json:"votingLocationFinderUrl,omitempty"`
}
