package shared

type DimensionValueMatchTypeEnum string

const (
	DimensionValueMatchTypeEnumExact              DimensionValueMatchTypeEnum = "EXACT"
	DimensionValueMatchTypeEnumBeginsWith         DimensionValueMatchTypeEnum = "BEGINS_WITH"
	DimensionValueMatchTypeEnumContains           DimensionValueMatchTypeEnum = "CONTAINS"
	DimensionValueMatchTypeEnumWildcardExpression DimensionValueMatchTypeEnum = "WILDCARD_EXPRESSION"
)

// DimensionValue
// Represents a DimensionValue resource.
type DimensionValue struct {
	DimensionName *string                      `json:"dimensionName,omitempty"`
	Etag          *string                      `json:"etag,omitempty"`
	ID            *string                      `json:"id,omitempty"`
	Kind          *string                      `json:"kind,omitempty"`
	MatchType     *DimensionValueMatchTypeEnum `json:"matchType,omitempty"`
	Value         *string                      `json:"value,omitempty"`
}
