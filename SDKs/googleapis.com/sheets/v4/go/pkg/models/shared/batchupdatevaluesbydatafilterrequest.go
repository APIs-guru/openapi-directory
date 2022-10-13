package shared

type BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum string

const (
	BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnumSerialNumber    BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum = "SERIAL_NUMBER"
	BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnumFormattedString BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum = "FORMATTED_STRING"
)

type BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum string

const (
	BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnumFormattedValue   BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum = "FORMATTED_VALUE"
	BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnumUnformattedValue BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum = "UNFORMATTED_VALUE"
	BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnumFormula          BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum = "FORMULA"
)

type BatchUpdateValuesByDataFilterRequestValueInputOptionEnum string

const (
	BatchUpdateValuesByDataFilterRequestValueInputOptionEnumInputValueOptionUnspecified BatchUpdateValuesByDataFilterRequestValueInputOptionEnum = "INPUT_VALUE_OPTION_UNSPECIFIED"
	BatchUpdateValuesByDataFilterRequestValueInputOptionEnumRaw                         BatchUpdateValuesByDataFilterRequestValueInputOptionEnum = "RAW"
	BatchUpdateValuesByDataFilterRequestValueInputOptionEnumUserEntered                 BatchUpdateValuesByDataFilterRequestValueInputOptionEnum = "USER_ENTERED"
)

type BatchUpdateValuesByDataFilterRequest struct {
	Data                         []DataFilterValueRange                                                `json:"data"`
	IncludeValuesInResponse      *bool                                                                 `json:"includeValuesInResponse"`
	ResponseDateTimeRenderOption *BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum `json:"responseDateTimeRenderOption"`
	ResponseValueRenderOption    *BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum    `json:"responseValueRenderOption"`
	ValueInputOption             *BatchUpdateValuesByDataFilterRequestValueInputOptionEnum             `json:"valueInputOption"`
}
