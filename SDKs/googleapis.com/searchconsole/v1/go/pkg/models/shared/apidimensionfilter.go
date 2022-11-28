package shared

type APIDimensionFilterDimensionEnum string

const (
	APIDimensionFilterDimensionEnumQuery            APIDimensionFilterDimensionEnum = "QUERY"
	APIDimensionFilterDimensionEnumPage             APIDimensionFilterDimensionEnum = "PAGE"
	APIDimensionFilterDimensionEnumCountry          APIDimensionFilterDimensionEnum = "COUNTRY"
	APIDimensionFilterDimensionEnumDevice           APIDimensionFilterDimensionEnum = "DEVICE"
	APIDimensionFilterDimensionEnumSearchAppearance APIDimensionFilterDimensionEnum = "SEARCH_APPEARANCE"
)

type APIDimensionFilterOperatorEnum string

const (
	APIDimensionFilterOperatorEnumEquals         APIDimensionFilterOperatorEnum = "EQUALS"
	APIDimensionFilterOperatorEnumNotEquals      APIDimensionFilterOperatorEnum = "NOT_EQUALS"
	APIDimensionFilterOperatorEnumContains       APIDimensionFilterOperatorEnum = "CONTAINS"
	APIDimensionFilterOperatorEnumNotContains    APIDimensionFilterOperatorEnum = "NOT_CONTAINS"
	APIDimensionFilterOperatorEnumIncludingRegex APIDimensionFilterOperatorEnum = "INCLUDING_REGEX"
	APIDimensionFilterOperatorEnumExcludingRegex APIDimensionFilterOperatorEnum = "EXCLUDING_REGEX"
)

// APIDimensionFilter
// A filter test to be applied to each row in the data set, where a match can return the row. Filters are string comparisons, and values and dimension names are not case-sensitive. Individual filters are either AND'ed or OR'ed within their parent filter group, according to the group's group type. You do not need to group by a specified dimension to filter against it.
type APIDimensionFilter struct {
	Dimension  *APIDimensionFilterDimensionEnum `json:"dimension,omitempty"`
	Expression *string                          `json:"expression,omitempty"`
	Operator   *APIDimensionFilterOperatorEnum  `json:"operator,omitempty"`
}
