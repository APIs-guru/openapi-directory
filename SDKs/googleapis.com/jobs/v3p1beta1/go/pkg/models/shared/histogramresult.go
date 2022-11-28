package shared

type HistogramResultSearchTypeEnum string

const (
	HistogramResultSearchTypeEnumSearchTypeUnspecified HistogramResultSearchTypeEnum = "SEARCH_TYPE_UNSPECIFIED"
	HistogramResultSearchTypeEnumCompanyID             HistogramResultSearchTypeEnum = "COMPANY_ID"
	HistogramResultSearchTypeEnumEmploymentType        HistogramResultSearchTypeEnum = "EMPLOYMENT_TYPE"
	HistogramResultSearchTypeEnumCompanySize           HistogramResultSearchTypeEnum = "COMPANY_SIZE"
	HistogramResultSearchTypeEnumDatePublished         HistogramResultSearchTypeEnum = "DATE_PUBLISHED"
	HistogramResultSearchTypeEnumEducationLevel        HistogramResultSearchTypeEnum = "EDUCATION_LEVEL"
	HistogramResultSearchTypeEnumExperienceLevel       HistogramResultSearchTypeEnum = "EXPERIENCE_LEVEL"
	HistogramResultSearchTypeEnumAdmin1                HistogramResultSearchTypeEnum = "ADMIN_1"
	HistogramResultSearchTypeEnumCountry               HistogramResultSearchTypeEnum = "COUNTRY"
	HistogramResultSearchTypeEnumCity                  HistogramResultSearchTypeEnum = "CITY"
	HistogramResultSearchTypeEnumLocale                HistogramResultSearchTypeEnum = "LOCALE"
	HistogramResultSearchTypeEnumLanguage              HistogramResultSearchTypeEnum = "LANGUAGE"
	HistogramResultSearchTypeEnumCategory              HistogramResultSearchTypeEnum = "CATEGORY"
	HistogramResultSearchTypeEnumCityCoordinate        HistogramResultSearchTypeEnum = "CITY_COORDINATE"
	HistogramResultSearchTypeEnumAdmin1Country         HistogramResultSearchTypeEnum = "ADMIN_1_COUNTRY"
	HistogramResultSearchTypeEnumCompanyDisplayName    HistogramResultSearchTypeEnum = "COMPANY_DISPLAY_NAME"
	HistogramResultSearchTypeEnumBaseCompensationUnit  HistogramResultSearchTypeEnum = "BASE_COMPENSATION_UNIT"
)

// HistogramResult
// Output only. Result of a histogram call. The response contains the histogram map for the search type specified by HistogramResult.field. The response is a map of each filter value to the corresponding count of jobs for that filter.
type HistogramResult struct {
	SearchType *HistogramResultSearchTypeEnum `json:"searchType,omitempty"`
	Values     map[string]int32               `json:"values,omitempty"`
}
