package shared

type ContestLevelEnum string

const (
	ContestLevelEnumInternational       ContestLevelEnum = "international"
	ContestLevelEnumCountry             ContestLevelEnum = "country"
	ContestLevelEnumAdministrativeArea1 ContestLevelEnum = "administrativeArea1"
	ContestLevelEnumRegional            ContestLevelEnum = "regional"
	ContestLevelEnumAdministrativeArea2 ContestLevelEnum = "administrativeArea2"
	ContestLevelEnumLocality            ContestLevelEnum = "locality"
	ContestLevelEnumSubLocality1        ContestLevelEnum = "subLocality1"
	ContestLevelEnumSubLocality2        ContestLevelEnum = "subLocality2"
	ContestLevelEnumSpecial             ContestLevelEnum = "special"
)

type ContestRolesEnum string

const (
	ContestRolesEnumHeadOfState            ContestRolesEnum = "headOfState"
	ContestRolesEnumHeadOfGovernment       ContestRolesEnum = "headOfGovernment"
	ContestRolesEnumDeputyHeadOfGovernment ContestRolesEnum = "deputyHeadOfGovernment"
	ContestRolesEnumGovernmentOfficer      ContestRolesEnum = "governmentOfficer"
	ContestRolesEnumExecutiveCouncil       ContestRolesEnum = "executiveCouncil"
	ContestRolesEnumLegislatorUpperBody    ContestRolesEnum = "legislatorUpperBody"
	ContestRolesEnumLegislatorLowerBody    ContestRolesEnum = "legislatorLowerBody"
	ContestRolesEnumHighestCourtJudge      ContestRolesEnum = "highestCourtJudge"
	ContestRolesEnumJudge                  ContestRolesEnum = "judge"
	ContestRolesEnumSchoolBoard            ContestRolesEnum = "schoolBoard"
	ContestRolesEnumSpecialPurposeOfficer  ContestRolesEnum = "specialPurposeOfficer"
	ContestRolesEnumOtherRole              ContestRolesEnum = "otherRole"
)

type Contest struct {
	BallotPlacement            *string            `json:"ballotPlacement"`
	BallotTitle                *string            `json:"ballotTitle"`
	Candidates                 []Candidate        `json:"candidates"`
	District                   *ElectoralDistrict `json:"district"`
	ElectorateSpecifications   *string            `json:"electorateSpecifications"`
	Level                      []ContestLevelEnum `json:"level"`
	NumberElected              *string            `json:"numberElected"`
	NumberVotingFor            *string            `json:"numberVotingFor"`
	Office                     *string            `json:"office"`
	PrimaryParties             []string           `json:"primaryParties"`
	PrimaryParty               *string            `json:"primaryParty"`
	ReferendumBallotResponses  []string           `json:"referendumBallotResponses"`
	ReferendumBrief            *string            `json:"referendumBrief"`
	ReferendumConStatement     *string            `json:"referendumConStatement"`
	ReferendumEffectOfAbstain  *string            `json:"referendumEffectOfAbstain"`
	ReferendumPassageThreshold *string            `json:"referendumPassageThreshold"`
	ReferendumProStatement     *string            `json:"referendumProStatement"`
	ReferendumSubtitle         *string            `json:"referendumSubtitle"`
	ReferendumText             *string            `json:"referendumText"`
	ReferendumTitle            *string            `json:"referendumTitle"`
	ReferendumURL              *string            `json:"referendumUrl"`
	Roles                      []ContestRolesEnum `json:"roles"`
	Sources                    []Source           `json:"sources"`
	Special                    *string            `json:"special"`
	Type                       *string            `json:"type"`
}
