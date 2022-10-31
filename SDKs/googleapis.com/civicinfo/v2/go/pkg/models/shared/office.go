package shared

type OfficeLevelsEnum string

const (
	OfficeLevelsEnumInternational       OfficeLevelsEnum = "international"
	OfficeLevelsEnumCountry             OfficeLevelsEnum = "country"
	OfficeLevelsEnumAdministrativeArea1 OfficeLevelsEnum = "administrativeArea1"
	OfficeLevelsEnumRegional            OfficeLevelsEnum = "regional"
	OfficeLevelsEnumAdministrativeArea2 OfficeLevelsEnum = "administrativeArea2"
	OfficeLevelsEnumLocality            OfficeLevelsEnum = "locality"
	OfficeLevelsEnumSubLocality1        OfficeLevelsEnum = "subLocality1"
	OfficeLevelsEnumSubLocality2        OfficeLevelsEnum = "subLocality2"
	OfficeLevelsEnumSpecial             OfficeLevelsEnum = "special"
)

type OfficeRolesEnum string

const (
	OfficeRolesEnumHeadOfState            OfficeRolesEnum = "headOfState"
	OfficeRolesEnumHeadOfGovernment       OfficeRolesEnum = "headOfGovernment"
	OfficeRolesEnumDeputyHeadOfGovernment OfficeRolesEnum = "deputyHeadOfGovernment"
	OfficeRolesEnumGovernmentOfficer      OfficeRolesEnum = "governmentOfficer"
	OfficeRolesEnumExecutiveCouncil       OfficeRolesEnum = "executiveCouncil"
	OfficeRolesEnumLegislatorUpperBody    OfficeRolesEnum = "legislatorUpperBody"
	OfficeRolesEnumLegislatorLowerBody    OfficeRolesEnum = "legislatorLowerBody"
	OfficeRolesEnumHighestCourtJudge      OfficeRolesEnum = "highestCourtJudge"
	OfficeRolesEnumJudge                  OfficeRolesEnum = "judge"
	OfficeRolesEnumSchoolBoard            OfficeRolesEnum = "schoolBoard"
	OfficeRolesEnumSpecialPurposeOfficer  OfficeRolesEnum = "specialPurposeOfficer"
	OfficeRolesEnumOtherRole              OfficeRolesEnum = "otherRole"
)

type Office struct {
	DivisionID      *string            `json:"divisionId,omitempty"`
	Levels          []OfficeLevelsEnum `json:"levels,omitempty"`
	Name            *string            `json:"name,omitempty"`
	OfficialIndices []int64            `json:"officialIndices,omitempty"`
	Roles           []OfficeRolesEnum  `json:"roles,omitempty"`
	Sources         []Source           `json:"sources,omitempty"`
}
