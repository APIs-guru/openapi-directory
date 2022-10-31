package shared




type APIDimensionFilterDimensionEnum string

const (
    APIDimensionFilterDimensionEnumQuery APIDimensionFilterDimensionEnum = "QUERY"
APIDimensionFilterDimensionEnumPage APIDimensionFilterDimensionEnum = "PAGE"
APIDimensionFilterDimensionEnumCountry APIDimensionFilterDimensionEnum = "COUNTRY"
APIDimensionFilterDimensionEnumDevice APIDimensionFilterDimensionEnum = "DEVICE"
APIDimensionFilterDimensionEnumSearchAppearance APIDimensionFilterDimensionEnum = "SEARCH_APPEARANCE"
)



type APIDimensionFilterOperatorEnum string

const (
    APIDimensionFilterOperatorEnumEquals APIDimensionFilterOperatorEnum = "EQUALS"
APIDimensionFilterOperatorEnumNotEquals APIDimensionFilterOperatorEnum = "NOT_EQUALS"
APIDimensionFilterOperatorEnumContains APIDimensionFilterOperatorEnum = "CONTAINS"
APIDimensionFilterOperatorEnumNotContains APIDimensionFilterOperatorEnum = "NOT_CONTAINS"
APIDimensionFilterOperatorEnumIncludingRegex APIDimensionFilterOperatorEnum = "INCLUDING_REGEX"
APIDimensionFilterOperatorEnumExcludingRegex APIDimensionFilterOperatorEnum = "EXCLUDING_REGEX"
)


type APIDimensionFilter struct {
    Dimension *APIDimensionFilterDimensionEnum `json:"dimension,omitempty"`
    Expression *string `json:"expression,omitempty"`
    Operator *APIDimensionFilterOperatorEnum `json:"operator,omitempty"`
    
}

