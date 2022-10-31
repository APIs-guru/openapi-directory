package shared




type PathReportDimensionValueMatchTypeEnum string

const (
    PathReportDimensionValueMatchTypeEnumExact PathReportDimensionValueMatchTypeEnum = "EXACT"
PathReportDimensionValueMatchTypeEnumBeginsWith PathReportDimensionValueMatchTypeEnum = "BEGINS_WITH"
PathReportDimensionValueMatchTypeEnumContains PathReportDimensionValueMatchTypeEnum = "CONTAINS"
PathReportDimensionValueMatchTypeEnumWildcardExpression PathReportDimensionValueMatchTypeEnum = "WILDCARD_EXPRESSION"
)


type PathReportDimensionValue struct {
    DimensionName *string `json:"dimensionName,omitempty"`
    Ids []string `json:"ids,omitempty"`
    Kind *string `json:"kind,omitempty"`
    MatchType *PathReportDimensionValueMatchTypeEnum `json:"matchType,omitempty"`
    Values []string `json:"values,omitempty"`
    
}

