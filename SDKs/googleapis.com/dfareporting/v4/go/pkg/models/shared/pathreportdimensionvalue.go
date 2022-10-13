package shared

type PathReportDimensionValueMatchTypeEnum string

const (
	PathReportDimensionValueMatchTypeEnumExact              PathReportDimensionValueMatchTypeEnum = "EXACT"
	PathReportDimensionValueMatchTypeEnumBeginsWith         PathReportDimensionValueMatchTypeEnum = "BEGINS_WITH"
	PathReportDimensionValueMatchTypeEnumContains           PathReportDimensionValueMatchTypeEnum = "CONTAINS"
	PathReportDimensionValueMatchTypeEnumWildcardExpression PathReportDimensionValueMatchTypeEnum = "WILDCARD_EXPRESSION"
)

type PathReportDimensionValue struct {
	DimensionName *string                                `json:"dimensionName"`
	Ids           []string                               `json:"ids"`
	Kind          *string                                `json:"kind"`
	MatchType     *PathReportDimensionValueMatchTypeEnum `json:"matchType"`
	Values        []string                               `json:"values"`
}
