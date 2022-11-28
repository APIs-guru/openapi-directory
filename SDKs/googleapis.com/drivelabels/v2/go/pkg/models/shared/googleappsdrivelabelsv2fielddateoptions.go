package shared

type GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum string

const (
	GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnumDateFormatUnspecified GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum = "DATE_FORMAT_UNSPECIFIED"
	GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnumLongDate              GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum = "LONG_DATE"
	GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnumShortDate             GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum = "SHORT_DATE"
)

// GoogleAppsDriveLabelsV2FieldDateOptions
// Options for the date field type.
type GoogleAppsDriveLabelsV2FieldDateOptions struct {
	DateFormat     *string                                                    `json:"dateFormat,omitempty"`
	DateFormatType *GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum `json:"dateFormatType,omitempty"`
	MaxValue       *GoogleTypeDate                                            `json:"maxValue,omitempty"`
	MinValue       *GoogleTypeDate                                            `json:"minValue,omitempty"`
}
