package shared

type DataFilterValueRangeMajorDimensionEnum string

const (
	DataFilterValueRangeMajorDimensionEnumDimensionUnspecified DataFilterValueRangeMajorDimensionEnum = "DIMENSION_UNSPECIFIED"
	DataFilterValueRangeMajorDimensionEnumRows                 DataFilterValueRangeMajorDimensionEnum = "ROWS"
	DataFilterValueRangeMajorDimensionEnumColumns              DataFilterValueRangeMajorDimensionEnum = "COLUMNS"
)

type DataFilterValueRange struct {
	DataFilter     *DataFilter                             `json:"dataFilter,omitempty"`
	MajorDimension *DataFilterValueRangeMajorDimensionEnum `json:"majorDimension,omitempty"`
	Values         [][]interface{}                         `json:"values,omitempty"`
}
