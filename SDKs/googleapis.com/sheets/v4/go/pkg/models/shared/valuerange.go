package shared

type ValueRangeMajorDimensionEnum string

const (
	ValueRangeMajorDimensionEnumDimensionUnspecified ValueRangeMajorDimensionEnum = "DIMENSION_UNSPECIFIED"
	ValueRangeMajorDimensionEnumRows                 ValueRangeMajorDimensionEnum = "ROWS"
	ValueRangeMajorDimensionEnumColumns              ValueRangeMajorDimensionEnum = "COLUMNS"
)

// ValueRange
// Data within a range of the spreadsheet.
type ValueRange struct {
	MajorDimension *ValueRangeMajorDimensionEnum `json:"majorDimension,omitempty"`
	Range          *string                       `json:"range,omitempty"`
	Values         [][]interface{}               `json:"values,omitempty"`
}
