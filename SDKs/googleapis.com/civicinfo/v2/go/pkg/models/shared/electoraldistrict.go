package shared

type ElectoralDistrictScopeEnum string

const (
	ElectoralDistrictScopeEnumStatewide     ElectoralDistrictScopeEnum = "statewide"
	ElectoralDistrictScopeEnumCongressional ElectoralDistrictScopeEnum = "congressional"
	ElectoralDistrictScopeEnumStateUpper    ElectoralDistrictScopeEnum = "stateUpper"
	ElectoralDistrictScopeEnumStateLower    ElectoralDistrictScopeEnum = "stateLower"
	ElectoralDistrictScopeEnumCountywide    ElectoralDistrictScopeEnum = "countywide"
	ElectoralDistrictScopeEnumJudicial      ElectoralDistrictScopeEnum = "judicial"
	ElectoralDistrictScopeEnumSchoolBoard   ElectoralDistrictScopeEnum = "schoolBoard"
	ElectoralDistrictScopeEnumCitywide      ElectoralDistrictScopeEnum = "citywide"
	ElectoralDistrictScopeEnumSpecial       ElectoralDistrictScopeEnum = "special"
	ElectoralDistrictScopeEnumCountyCouncil ElectoralDistrictScopeEnum = "countyCouncil"
	ElectoralDistrictScopeEnumTownship      ElectoralDistrictScopeEnum = "township"
	ElectoralDistrictScopeEnumWard          ElectoralDistrictScopeEnum = "ward"
	ElectoralDistrictScopeEnumCityCouncil   ElectoralDistrictScopeEnum = "cityCouncil"
	ElectoralDistrictScopeEnumNational      ElectoralDistrictScopeEnum = "national"
)

// ElectoralDistrict
// Describes the geographic scope of a contest.
type ElectoralDistrict struct {
	ID    *string                     `json:"id,omitempty"`
	Name  *string                     `json:"name,omitempty"`
	Scope *ElectoralDistrictScopeEnum `json:"scope,omitempty"`
}
