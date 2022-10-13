package shared

type AdministrativeBody struct {
	AbsenteeVotingInfoURL               *string            `json:"absenteeVotingInfoUrl"`
	BallotInfoURL                       *string            `json:"ballotInfoUrl"`
	CorrespondenceAddress               *SimpleAddressType `json:"correspondenceAddress"`
	ElectionInfoURL                     *string            `json:"electionInfoUrl"`
	ElectionNoticeText                  *string            `json:"electionNoticeText"`
	ElectionNoticeURL                   *string            `json:"electionNoticeUrl"`
	ElectionOfficials                   []ElectionOfficial `json:"electionOfficials"`
	ElectionRegistrationConfirmationURL *string            `json:"electionRegistrationConfirmationUrl"`
	ElectionRegistrationURL             *string            `json:"electionRegistrationUrl"`
	ElectionRulesURL                    *string            `json:"electionRulesUrl"`
	HoursOfOperation                    *string            `json:"hoursOfOperation"`
	Name                                *string            `json:"name"`
	PhysicalAddress                     *SimpleAddressType `json:"physicalAddress"`
	VoterServices                       []string           `json:"voter_services"`
	VotingLocationFinderURL             *string            `json:"votingLocationFinderUrl"`
}
