package shared

type NumberFormatTypeEnum string

const (
	NumberFormatTypeEnumNumberFormatTypeUnspecified NumberFormatTypeEnum = "NUMBER_FORMAT_TYPE_UNSPECIFIED"
	NumberFormatTypeEnumText                        NumberFormatTypeEnum = "TEXT"
	NumberFormatTypeEnumNumber                      NumberFormatTypeEnum = "NUMBER"
	NumberFormatTypeEnumPercent                     NumberFormatTypeEnum = "PERCENT"
	NumberFormatTypeEnumCurrency                    NumberFormatTypeEnum = "CURRENCY"
	NumberFormatTypeEnumDate                        NumberFormatTypeEnum = "DATE"
	NumberFormatTypeEnumTime                        NumberFormatTypeEnum = "TIME"
	NumberFormatTypeEnumDateTime                    NumberFormatTypeEnum = "DATE_TIME"
	NumberFormatTypeEnumScientific                  NumberFormatTypeEnum = "SCIENTIFIC"
)

// NumberFormat
// The number format of a cell.
type NumberFormat struct {
	Pattern *string               `json:"pattern,omitempty"`
	Type    *NumberFormatTypeEnum `json:"type,omitempty"`
}
