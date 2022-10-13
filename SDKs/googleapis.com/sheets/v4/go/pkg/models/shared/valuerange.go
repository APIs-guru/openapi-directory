package shared

type ValueRangeMajorDimensionEnum string

const (
	ValueRangeMajorDimensionEnumDimensionUnspecified ValueRangeMajorDimensionEnum = "DIMENSION_UNSPECIFIED"
	ValueRangeMajorDimensionEnumRows                 ValueRangeMajorDimensionEnum = "ROWS"
	ValueRangeMajorDimensionEnumColumns              ValueRangeMajorDimensionEnum = "COLUMNS"
)

type ValueRange struct {
	MajorDimension *ValueRangeMajorDimensionEnum `json:"majorDimension"`
	Range          *string                       `json:"range"`
	Values         [][]interface{}               `json:"values"`
}
