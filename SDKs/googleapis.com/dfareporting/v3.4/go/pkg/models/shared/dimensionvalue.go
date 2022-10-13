package shared

type DimensionValueMatchTypeEnum string

const (
	DimensionValueMatchTypeEnumExact              DimensionValueMatchTypeEnum = "EXACT"
	DimensionValueMatchTypeEnumBeginsWith         DimensionValueMatchTypeEnum = "BEGINS_WITH"
	DimensionValueMatchTypeEnumContains           DimensionValueMatchTypeEnum = "CONTAINS"
	DimensionValueMatchTypeEnumWildcardExpression DimensionValueMatchTypeEnum = "WILDCARD_EXPRESSION"
)

type DimensionValue struct {
	DimensionName *string                      `json:"dimensionName"`
	Etag          *string                      `json:"etag"`
	ID            *string                      `json:"id"`
	Kind          *string                      `json:"kind"`
	MatchType     *DimensionValueMatchTypeEnum `json:"matchType"`
	Value         *string                      `json:"value"`
}
