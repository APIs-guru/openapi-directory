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

type BatchGetValuesByDataFilterRequest struct {
	DataFilters          []DataFilter                                               `json:"dataFilters"`
	DateTimeRenderOption *BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum `json:"dateTimeRenderOption"`
	MajorDimension       *BatchGetValuesByDataFilterRequestMajorDimensionEnum       `json:"majorDimension"`
	ValueRenderOption    *BatchGetValuesByDataFilterRequestValueRenderOptionEnum    `json:"valueRenderOption"`
}
