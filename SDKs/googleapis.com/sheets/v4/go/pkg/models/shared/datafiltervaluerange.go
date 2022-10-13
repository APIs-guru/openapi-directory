package shared

type DataFilterValueRangeMajorDimensionEnum string

const (
	DataFilterValueRangeMajorDimensionEnumDimensionUnspecified DataFilterValueRangeMajorDimensionEnum = "DIMENSION_UNSPECIFIED"
	DataFilterValueRangeMajorDimensionEnumRows                 DataFilterValueRangeMajorDimensionEnum = "ROWS"
	DataFilterValueRangeMajorDimensionEnumColumns              DataFilterValueRangeMajorDimensionEnum = "COLUMNS"
)

type DataFilterValueRange struct {
	DataFilter     *DataFilter                             `json:"dataFilter"`
	MajorDimension *DataFilterValueRangeMajorDimensionEnum `json:"majorDimension"`
	Values         [][]interface{}                         `json:"values"`
}
