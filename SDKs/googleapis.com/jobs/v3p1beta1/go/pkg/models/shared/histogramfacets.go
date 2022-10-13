package shared

type HistogramFacetsSimpleHistogramFacetsEnum string

const (
	HistogramFacetsSimpleHistogramFacetsEnumSearchTypeUnspecified HistogramFacetsSimpleHistogramFacetsEnum = "SEARCH_TYPE_UNSPECIFIED"
	HistogramFacetsSimpleHistogramFacetsEnumCompanyID             HistogramFacetsSimpleHistogramFacetsEnum = "COMPANY_ID"
	HistogramFacetsSimpleHistogramFacetsEnumEmploymentType        HistogramFacetsSimpleHistogramFacetsEnum = "EMPLOYMENT_TYPE"
	HistogramFacetsSimpleHistogramFacetsEnumCompanySize           HistogramFacetsSimpleHistogramFacetsEnum = "COMPANY_SIZE"
	HistogramFacetsSimpleHistogramFacetsEnumDatePublished         HistogramFacetsSimpleHistogramFacetsEnum = "DATE_PUBLISHED"
	HistogramFacetsSimpleHistogramFacetsEnumEducationLevel        HistogramFacetsSimpleHistogramFacetsEnum = "EDUCATION_LEVEL"
	HistogramFacetsSimpleHistogramFacetsEnumExperienceLevel       HistogramFacetsSimpleHistogramFacetsEnum = "EXPERIENCE_LEVEL"
	HistogramFacetsSimpleHistogramFacetsEnumAdmin1                HistogramFacetsSimpleHistogramFacetsEnum = "ADMIN_1"
	HistogramFacetsSimpleHistogramFacetsEnumCountry               HistogramFacetsSimpleHistogramFacetsEnum = "COUNTRY"
	HistogramFacetsSimpleHistogramFacetsEnumCity                  HistogramFacetsSimpleHistogramFacetsEnum = "CITY"
	HistogramFacetsSimpleHistogramFacetsEnumLocale                HistogramFacetsSimpleHistogramFacetsEnum = "LOCALE"
	HistogramFacetsSimpleHistogramFacetsEnumLanguage              HistogramFacetsSimpleHistogramFacetsEnum = "LANGUAGE"
	HistogramFacetsSimpleHistogramFacetsEnumCategory              HistogramFacetsSimpleHistogramFacetsEnum = "CATEGORY"
	HistogramFacetsSimpleHistogramFacetsEnumCityCoordinate        HistogramFacetsSimpleHistogramFacetsEnum = "CITY_COORDINATE"
	HistogramFacetsSimpleHistogramFacetsEnumAdmin1Country         HistogramFacetsSimpleHistogramFacetsEnum = "ADMIN_1_COUNTRY"
	HistogramFacetsSimpleHistogramFacetsEnumCompanyDisplayName    HistogramFacetsSimpleHistogramFacetsEnum = "COMPANY_DISPLAY_NAME"
	HistogramFacetsSimpleHistogramFacetsEnumBaseCompensationUnit  HistogramFacetsSimpleHistogramFacetsEnum = "BASE_COMPENSATION_UNIT"
)

type HistogramFacets struct {
	CompensationHistogramFacets    []CompensationHistogramRequest             `json:"compensationHistogramFacets"`
	CustomAttributeHistogramFacets []CustomAttributeHistogramRequest          `json:"customAttributeHistogramFacets"`
	SimpleHistogramFacets          []HistogramFacetsSimpleHistogramFacetsEnum `json:"simpleHistogramFacets"`
}
