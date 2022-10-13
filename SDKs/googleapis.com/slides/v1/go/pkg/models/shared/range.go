package shared

type RangeTypeEnum string

const (
	RangeTypeEnumRangeTypeUnspecified RangeTypeEnum = "RANGE_TYPE_UNSPECIFIED"
	RangeTypeEnumFixedRange           RangeTypeEnum = "FIXED_RANGE"
	RangeTypeEnumFromStartIndex       RangeTypeEnum = "FROM_START_INDEX"
	RangeTypeEnumAll                  RangeTypeEnum = "ALL"
)

type Range struct {
	EndIndex   *int32         `json:"endIndex"`
	StartIndex *int32         `json:"startIndex"`
	Type       *RangeTypeEnum `json:"type"`
}
