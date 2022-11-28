package shared

type BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum string

const (
	BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnumSerialNumber    BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum = "SERIAL_NUMBER"
	BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnumFormattedString BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum = "FORMATTED_STRING"
)

type BatchGetValuesByDataFilterRequestMajorDimensionEnum string

const (
	BatchGetValuesByDataFilterRequestMajorDimensionEnumDimensionUnspecified BatchGetValuesByDataFilterRequestMajorDimensionEnum = "DIMENSION_UNSPECIFIED"
	BatchGetValuesByDataFilterRequestMajorDimensionEnumRows                 BatchGetValuesByDataFilterRequestMajorDimensionEnum = "ROWS"
	BatchGetValuesByDataFilterRequestMajorDimensionEnumColumns              BatchGetValuesByDataFilterRequestMajorDimensionEnum = "COLUMNS"
)

type BatchGetValuesByDataFilterRequestValueRenderOptionEnum string

const (
	BatchGetValuesByDataFilterRequestValueRenderOptionEnumFormattedValue   BatchGetValuesByDataFilterRequestValueRenderOptionEnum = "FORMATTED_VALUE"
	BatchGetValuesByDataFilterRequestValueRenderOptionEnumUnformattedValue BatchGetValuesByDataFilterRequestValueRenderOptionEnum = "UNFORMATTED_VALUE"
	BatchGetValuesByDataFilterRequestValueRenderOptionEnumFormula          BatchGetValuesByDataFilterRequestValueRenderOptionEnum = "FORMULA"
)

// BatchGetValuesByDataFilterRequest
// The request for retrieving a range of values in a spreadsheet selected by a set of DataFilters.
type BatchGetValuesByDataFilterRequest struct {
	DataFilters          []DataFilter                                               `json:"dataFilters,omitempty"`
	DateTimeRenderOption *BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum `json:"dateTimeRenderOption,omitempty"`
	MajorDimension       *BatchGetValuesByDataFilterRequestMajorDimensionEnum       `json:"majorDimension,omitempty"`
	ValueRenderOption    *BatchGetValuesByDataFilterRequestValueRenderOptionEnum    `json:"valueRenderOption,omitempty"`
}
