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

// Contest
// Information about a contest that appears on a voter's ballot.
type Contest struct {
	BallotPlacement            *string            `json:"ballotPlacement,omitempty"`
	BallotTitle                *string            `json:"ballotTitle,omitempty"`
	Candidates                 []Candidate        `json:"candidates,omitempty"`
	District                   *ElectoralDistrict `json:"district,omitempty"`
	ElectorateSpecifications   *string            `json:"electorateSpecifications,omitempty"`
	Level                      []ContestLevelEnum `json:"level,omitempty"`
	NumberElected              *string            `json:"numberElected,omitempty"`
	NumberVotingFor            *string            `json:"numberVotingFor,omitempty"`
	Office                     *string            `json:"office,omitempty"`
	PrimaryParties             []string           `json:"primaryParties,omitempty"`
	PrimaryParty               *string            `json:"primaryParty,omitempty"`
	ReferendumBallotResponses  []string           `json:"referendumBallotResponses,omitempty"`
	ReferendumBrief            *string            `json:"referendumBrief,omitempty"`
	ReferendumConStatement     *string            `json:"referendumConStatement,omitempty"`
	ReferendumEffectOfAbstain  *string            `json:"referendumEffectOfAbstain,omitempty"`
	ReferendumPassageThreshold *string            `json:"referendumPassageThreshold,omitempty"`
	ReferendumProStatement     *string            `json:"referendumProStatement,omitempty"`
	ReferendumSubtitle         *string            `json:"referendumSubtitle,omitempty"`
	ReferendumText             *string            `json:"referendumText,omitempty"`
	ReferendumTitle            *string            `json:"referendumTitle,omitempty"`
	ReferendumURL              *string            `json:"referendumUrl,omitempty"`
	Roles                      []ContestRolesEnum `json:"roles,omitempty"`
	Sources                    []Source           `json:"sources,omitempty"`
	Special                    *string            `json:"special,omitempty"`
	Type                       *string            `json:"type,omitempty"`
}
