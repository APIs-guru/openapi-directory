package shared

type ValueRangeMajorDimensionEnum string

const (
	ValueRangeMajorDimensionEnumDimensionUnspecified ValueRangeMajorDimensionEnum = "DIMENSION_UNSPECIFIED"
	ValueRangeMajorDimensionEnumRows                 ValueRangeMajorDimensionEnum = "ROWS"
	ValueRangeMajorDimensionEnumColumns              ValueRangeMajorDimensionEnum = "COLUMNS"
)

type ValueRange struct {
	MajorDimension *ValueRangeMajorDimensionEnum `json:"majorDimension,omitempty"`
	Range          *string                       `json:"range,omitempty"`
	Values         [][]interface{}               `json:"values,omitempty"`
}
