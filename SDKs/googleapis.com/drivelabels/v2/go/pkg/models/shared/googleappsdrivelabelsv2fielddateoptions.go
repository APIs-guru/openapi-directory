package shared

type GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum string

const (
	GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnumDateFormatUnspecified GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum = "DATE_FORMAT_UNSPECIFIED"
	GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnumLongDate              GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum = "LONG_DATE"
	GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnumShortDate             GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum = "SHORT_DATE"
)

type GoogleAppsDriveLabelsV2FieldDateOptions struct {
	DateFormat     *string                                                    `json:"dateFormat"`
	DateFormatType *GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum `json:"dateFormatType"`
	MaxValue       *GoogleTypeDate                                            `json:"maxValue"`
	MinValue       *GoogleTypeDate                                            `json:"minValue"`
}
