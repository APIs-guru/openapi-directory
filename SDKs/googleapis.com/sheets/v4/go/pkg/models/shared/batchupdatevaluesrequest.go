package shared

type BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum string

const (
	BatchUpdateValuesRequestResponseDateTimeRenderOptionEnumSerialNumber    BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum = "SERIAL_NUMBER"
	BatchUpdateValuesRequestResponseDateTimeRenderOptionEnumFormattedString BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum = "FORMATTED_STRING"
)

type BatchUpdateValuesRequestResponseValueRenderOptionEnum string

const (
	BatchUpdateValuesRequestResponseValueRenderOptionEnumFormattedValue   BatchUpdateValuesRequestResponseValueRenderOptionEnum = "FORMATTED_VALUE"
	BatchUpdateValuesRequestResponseValueRenderOptionEnumUnformattedValue BatchUpdateValuesRequestResponseValueRenderOptionEnum = "UNFORMATTED_VALUE"
	BatchUpdateValuesRequestResponseValueRenderOptionEnumFormula          BatchUpdateValuesRequestResponseValueRenderOptionEnum = "FORMULA"
)

type BatchUpdateValuesRequestValueInputOptionEnum string

const (
	BatchUpdateValuesRequestValueInputOptionEnumInputValueOptionUnspecified BatchUpdateValuesRequestValueInputOptionEnum = "INPUT_VALUE_OPTION_UNSPECIFIED"
	BatchUpdateValuesRequestValueInputOptionEnumRaw                         BatchUpdateValuesRequestValueInputOptionEnum = "RAW"
	BatchUpdateValuesRequestValueInputOptionEnumUserEntered                 BatchUpdateValuesRequestValueInputOptionEnum = "USER_ENTERED"
)

type BatchUpdateValuesRequest struct {
	Data                         []ValueRange                                              `json:"data,omitempty"`
	IncludeValuesInResponse      *bool                                                     `json:"includeValuesInResponse,omitempty"`
	ResponseDateTimeRenderOption *BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum `json:"responseDateTimeRenderOption,omitempty"`
	ResponseValueRenderOption    *BatchUpdateValuesRequestResponseValueRenderOptionEnum    `json:"responseValueRenderOption,omitempty"`
	ValueInputOption             *BatchUpdateValuesRequestValueInputOptionEnum             `json:"valueInputOption,omitempty"`
}
